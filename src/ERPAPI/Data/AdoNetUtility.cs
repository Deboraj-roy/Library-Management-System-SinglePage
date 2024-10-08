using Microsoft.Data.SqlClient;
using System.Dynamic;
using System.Text;

namespace ERPAPI.Data
{
    public class AdoNetUtility2
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public AdoNetUtility2(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = configuration.GetConnectionString("Agriculture") ?? "DbConnectionNotFound";
        }

        public string GetConnectionString()
        {
            return _connectionString;
        }
    }

    public class AdoNetUtility
    {
        //private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public AdoNetUtility(string connectionString)
        {
            //_configuration = new ;
            _connectionString = connectionString ?? "DbConnectionNotFound";
        }

        public string GetConnectionString()
        {
            return _connectionString;
        }

        public object ExecuteQuery(string query, params object[] parameters)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                using (var command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddRange(parameters.Select((p, i) => new SqlParameter($"@Param{i}", p)).ToArray());

                    return command.ExecuteScalar();
                }
            }
        }
        /*public object ExecuteQuery(string query, params object[] parameters)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                using (var command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddRange(parameters.Select((p, i) => new SqlParameter($"@Param{i}", p)).ToArray());

                    if (query.StartsWith("SELECT", StringComparison.OrdinalIgnoreCase))
                    {
                        // Execute the query and return the result
                        return command.ExecuteScalar();
                    }
                    else
                    {
                        // Execute the query and return the number of affected rows
                        command.ExecuteNonQuery();
                        return command.Parameters.Count;
                    }
                }
            }
        }*/

        public string GenerateQuery(string tableName, IEnumerable<string> columns, string whereClause = null, string orderBy = null, int? top = null)
        {
            var queryBuilder = new StringBuilder();

            queryBuilder.Append("SELECT ");

            if (top.HasValue)
            {
                queryBuilder.Append($"TOP ({top}) ");
            }

            queryBuilder.Append(string.Join(", ", columns.Select(column => $"[{column}]")));

            queryBuilder.Append($" FROM [{tableName}]");

            if (!string.IsNullOrEmpty(whereClause))
            {
                queryBuilder.Append($" WHERE {whereClause}");
            }

            if (!string.IsNullOrEmpty(orderBy))
            {
                queryBuilder.Append($" ORDER BY {orderBy}");
            }

            return queryBuilder.ToString();
        }

        public IEnumerable<dynamic> ExecuteQuery(string query)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                using (var command = new SqlCommand(query, connection))
                {
                    var reader = command.ExecuteReader();

                    var results = new List<dynamic>();
                    while (reader.Read())
                    {
                        var row = new ExpandoObject() as IDictionary<string, object>;
                        for (int i = 0; i < reader.FieldCount; i++)
                        {
                            row.Add(reader.GetName(i), reader.GetValue(i));
                        }
                        results.Add(row);
                    }

                    return results;
                }
            }
        }

    }
}

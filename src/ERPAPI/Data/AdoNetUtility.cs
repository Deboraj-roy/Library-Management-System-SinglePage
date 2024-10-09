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

        /* public object ExecuteQuery(string query, params object[] parameters)
         {
             //using (var connection = new SqlConnection(_connectionString))
             //{
             //    connection.Open();

             //    using (var command = new SqlCommand(query, connection))
             //    {
             //        command.Parameters.AddRange(parameters.Select((p, i) => new SqlParameter($"@Param{i}", p)).ToArray());

             //        return command.ExecuteScalar();
             //    }
             //}
             using (var connection = new SqlConnection(_connectionString))
             {
                 connection.Open();

                 using (var command = new SqlCommand(query, connection))
                 {
                     foreach (var parameter in parameters)
                     {
                         var sqlParameter = new SqlParameter($"@{parameter.Key}", parameter.Value);
                         command.Parameters.Add(sqlParameter);
                     }

                     return command.ExecuteScalar();
                 }
             }
         }*/


        public object ExecuteQuery(string query, params (string Key, object Value)[] parameters)
        {
            if (string.IsNullOrEmpty(_connectionString))
            {
                throw new ArgumentNullException(nameof(_connectionString), "Connection string is null or empty.");
            }

            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    connection.Open();

                    using (var command = new SqlCommand(query, connection))
                    {
                        foreach (var parameter in parameters)
                        {
                            var sqlParameter = new SqlParameter($"@{parameter.Key}", parameter.Value);
                            command.Parameters.Add(sqlParameter);
                        }

                        return command.ExecuteScalar();
                    }
                }
            }
            catch (Exception ex)
            {
                // Handle the exception or log it
                throw ex; // Throw the exception to be handled by the caller();
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

        /*public object ExecuteQuery(string query, params object[] parameters)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                using (var command = new SqlCommand(query, connection))
                {
                    for (int i = 0; i < parameters.Length; i++)
                    {
                        command.Parameters.AddWithValue($"@Param{i}", parameters[i]);
                    }

                    if (query.StartsWith("SELECT", StringComparison.OrdinalIgnoreCase))
                    {
                        // Execute the query and return the result
                        return command.ExecuteScalar();
                    }
                    else
                    {
                        // Execute the query and return the number of affected rows
                        return command.ExecuteNonQuery();
                    }
                }
            }
        }*/

        public object ExecuteQuery(string query, params object[] parameters)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                using (var command = new SqlCommand(query, connection))
                {
                    for (int i = 0; i < parameters.Length; i++)
                    {
                        command.Parameters.AddWithValue($"@Param{i}", parameters[i] ?? DBNull.Value);  // Handles null values
                    }

                    if (query.TrimStart().StartsWith("SELECT", StringComparison.OrdinalIgnoreCase))
                    {
                        // ExecuteReader for returning multiple rows
                        using (var reader = command.ExecuteReader())
                        {
                            if (reader.HasRows)
                            {
                                var results = new List<Dictionary<string, object>>();
                                while (reader.Read())
                                {
                                    var row = new Dictionary<string, object>();
                                    for (int i = 0; i < reader.FieldCount; i++)
                                    {
                                        row[reader.GetName(i)] = reader.IsDBNull(i) ? null : reader.GetValue(i);
                                    }
                                    results.Add(row);
                                }
                                return results.Count == 1 ? results[0] : results;  // Return a single row or a list
                            }
                        }
                        return null;  // No rows found
                    }
                    else
                    {
                        // For non-select queries (like INSERT, UPDATE, DELETE), return the number of affected rows
                        return command.ExecuteNonQuery();
                    }
                }
            }
        }


        public async Task<object> ExecuteQueryAsync(string query, params object[] parameters)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                using (var command = new SqlCommand(query, connection))
                {
                    for (int i = 0; i < parameters.Length; i++)
                    {
                        command.Parameters.AddWithValue($"@Param{i}", parameters[i] ?? DBNull.Value);  // Handles null values
                    }

                    if (query.TrimStart().StartsWith("SELECT", StringComparison.OrdinalIgnoreCase))
                    {
                        // ExecuteReaderAsync for asynchronous query execution
                        using (var reader = await command.ExecuteReaderAsync())
                        {
                            if (reader.HasRows)
                            {
                                var results = new List<Dictionary<string, object>>();
                                while (await reader.ReadAsync())
                                {
                                    var row = new Dictionary<string, object>();
                                    for (int i = 0; i < reader.FieldCount; i++)
                                    {
                                        row[reader.GetName(i)] = reader.IsDBNull(i) ? null : reader.GetValue(i);
                                    }
                                    results.Add(row);
                                }
                                return results.Count == 1 ? results[0] : results;  // Return a single row or a list
                            }
                        }
                        return null;  // No rows found
                    }
                    else
                    {
                        // ExecuteNonQueryAsync for non-select queries
                        return await command.ExecuteNonQueryAsync();
                    }
                }
            }
        }




        public string GenerateQuery(string tableName, IEnumerable<string> columns, string whereClause = null, string orderBy = null, int? top = null)
        {
            var queryBuilder = new StringBuilder();

            queryBuilder.Append("SELECT ");

            if (top.HasValue)
            {
                queryBuilder.Append($"TOP ({top}) ");
            }

            if(columns != null && columns.Any())
            {
                if (columns.Contains("*"))
                {
                    queryBuilder.Append("*");
                }
                else
                    queryBuilder.Append(string.Join(", ", columns.Select(column => $"[{column}]")));

            }

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

        public IEnumerable<dynamic> ExecuteQuery(string query, Dictionary<string, object> parameters)
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

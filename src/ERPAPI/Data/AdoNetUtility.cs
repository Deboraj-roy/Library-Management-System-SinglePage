using Microsoft.Data.SqlClient;
using System.Dynamic;
using System.Text;

namespace ERPAPI.Data
{
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

        /// <summary>
        /// /Dynamicaly handel SQL query and its parameters
        /// </summary>
        /// <param name="query"></param>
        /// <param name="parameters"></param>
        /// <returns></returns>

        //Object parameters
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

        //Dictionary of parameters

        public async Task<object> ExecuteQueryAsync(string query, Dictionary<string, object> parameters)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                using (var command = new SqlCommand(query, connection))
                {
                    // Add parameters from the dictionary
                    foreach (var param in parameters)
                    {
                        command.Parameters.AddWithValue(param.Key, param.Value ?? DBNull.Value); // Handles null values
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

    }
}

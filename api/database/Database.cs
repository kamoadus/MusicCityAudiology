using MySql.Data.MySqlClient;
 
namespace api.database
{
    public class Database
    {
        string server = "lyl3nln24eqcxxot.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
        string database = "psmjh2r64v4natx5";
        string port = "3306";
        string userName = "hh1bgwqx63jkulej";
        string password = "airstr2e2fmxbedj";
 
        public MySqlConnection GetPublicConnection()
        {
            string cs = $"server={server}; user={userName}; database={database}; port={port}; password={password}";
            var con = new MySqlConnection(cs);
            return con;
        }
    }
}
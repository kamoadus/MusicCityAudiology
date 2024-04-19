using MySql.Data.MySqlClient;
using api.database;
using Microsoft.Extensions.Configuration.UserSecrets;

namespace api.models
{
    public class UserInfo
    {
        public int UserID { get; set; }
        public string Username { get; set;}
        public string Password { get; set;}
        public string Fname { get; set;}
        public string Lname { get; set;}
        public static int GetUserInfo(string username, string password)
        {
            int userId = 0;

            //List<UserInfo> UserInfo = new List <UserInfo>();
            Database database = new Database();
            using var con = database.GetPublicConnection();
 
            string stm = "Select userID from User_Info where username = @username and password = @password";
            MySqlCommand cmd = new MySqlCommand(stm, con);
            con.Open();

            cmd.Parameters.AddWithValue("@username", username);
            cmd.Parameters.AddWithValue("@password", password);
            cmd.Prepare();
            
            MySqlDataReader rdr = cmd.ExecuteReader();
            while(rdr.Read())
            {
                userId = rdr.GetInt32(0);
                System.Console.WriteLine(userId);
                // UserInfo.Add (new UserInfo(){UserID=rdr.GetInt32(0), Username=rdr.GetString(1), Password=rdr.GetString(2), Fname=rdr.GetString(3), Lname=rdr.GetString(4)});
            }
            System.Console.WriteLine(userId);
            return userId;
        }
        public void AddUser(UserInfo UserInfo)
        {
            Database database = new Database();
            using var con = database.GetPublicConnection();
            string stm = @"Insert into User_Info (Username, Password, Fname, Lname) VALUES(@Username, @Password, @Fname, @Lname)";
            MySqlCommand cmd = new MySqlCommand(stm, con);
            con.Open();
            cmd.Parameters.AddWithValue("@Username", UserInfo.Username);
            cmd.Parameters.AddWithValue("@Password", UserInfo.Password);
            cmd.Parameters.AddWithValue("@Fname", UserInfo.Fname);
            cmd.Parameters.AddWithValue("@Lname", UserInfo.Lname);
 
            cmd.Prepare();
            cmd.ExecuteNonQuery();
            con.Close();
        }
    }
}
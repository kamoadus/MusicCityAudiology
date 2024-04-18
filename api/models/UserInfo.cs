using MySql.Data.MySqlClient;
using api.database;

namespace api.models
{
    public class UserInfo
    {
        public int UserID { get; set; }
        public string Username { get; set;}
        public string Password { get; set;}
        public string Fname { get; set;}
        public string Lname { get; set;}
        public static List<UserInfo> GetAllUserInfo()
        {
            List<UserInfo> UserInfo = new List <UserInfo>();
            Database database = new Database();
            using var con = database.GetPublicConnection();
 
            string stm = "Select * from User_Info";
            MySqlCommand cmd = new MySqlCommand(stm, con);
            con.Open();
            MySqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                UserInfo.Add (new UserInfo(){UserID=rdr.GetInt32(0), Username=rdr.GetString(1), Password=rdr.GetString(2), Fname=rdr.GetString(3), Lname=rdr.GetString(4)});
            }
            con.Close();
            return UserInfo;
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
            cmd.Parameters.AddWithValue("@FName", UserInfo.Fname);
            cmd.Parameters.AddWithValue("@Lname", UserInfo.Lname);
 
            cmd.Prepare();
            cmd.ExecuteNonQuery();
            con.Close();
        }
    }
}
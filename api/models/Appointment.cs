using api.database;
using MySql.Data.MySqlClient;
using NuGet.Common;
 
namespace api.models
{
    public class Appointment
    {
        public int ApptID { get; set; }
        public int UserID { get; set;}
        public string PayMethod { get; set; }
        public string ApptLocation {get; set;}
        public string ApptTreatment { get; set;}
        public DateTime ApptDate { get; set; }
        public bool Approved {get; set;}
 
        public static List<Appointment> GetAllAppointments()
        {
            List<Appointment> appointment = new List<Appointment>();
            Database databse = new Database();
            using var con = databse.GetPublicConnection();
 
            string stm = "Select * from Appointment";
            MySqlCommand cmd = new MySqlCommand(stm, con);
            con.Open();
            MySqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                appointment.Add(new Appointment(){ApptID=rdr.GetInt32(0), UserID=rdr.GetInt32(1), PayMethod=rdr.GetString(2), ApptLocation=rdr.GetString(3), ApptTreatment=rdr.GetString(4), ApptDate= rdr.GetDateTime(5), Approved=rdr.GetBoolean(6)});
            }
            con.Close();
            return appointment;
        }
 
        public void AddAppointment(Appointment appointment)
        {
            Database database = new Database();
            using var con = database.GetPublicConnection();
 
            string stm = @"Insert into Appointment (UserID, PayMethod, ApptLocation, ApptTreatment, ApptDate, Approved) VALUES(@UserID, @PayMethod, @ApptLocation, @ApptTreatment, @ApptDate, @Approved)";
            MySqlCommand cmd = new MySqlCommand(stm, con);
            con.Open();
            cmd.Parameters.AddWithValue("@UserID", appointment.UserID);
            cmd.Parameters.AddWithValue("@PayMethod", appointment.PayMethod);
            cmd.Parameters.AddWithValue("@ApptLocation", appointment.ApptLocation);
            cmd.Parameters.AddWithValue("@ApptTreatment", appointment.ApptTreatment);
            cmd.Parameters.AddWithValue("@ApptDate", appointment.ApptDate);
            cmd.Parameters.AddWithValue("@Approved", appointment.Approved);
 
            cmd.Prepare();
            cmd.ExecuteNonQuery();
            con.Close();
        }
    }
}
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
        public DateTime ApptDate { get; set; }
        public int ApptEndDate { get; set; }
        public bool HearingAids { get; set;}
        public bool EarmoldImpressions { get; set;}
        public bool CustomHearingProtection { get; set;}
        public bool EarCanalCleaning { get; set;}
        public bool AudiologyConsults { get; set;}
        public bool DeviceCleaning { get; set;}
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
                appointment.Add(new Appointment(){ApptID=rdr.GetInt32(0), UserID=rdr.GetInt32(1), PayMethod=rdr.GetString(2), ApptLocation=rdr.GetString(3), ApptDate=rdr.GetDateTime(4), ApptEndDate=rdr.GetInt32(5), HearingAids=rdr.GetBoolean(6), EarmoldImpressions=rdr.GetBoolean(7),CustomHearingProtection=rdr.GetBoolean(8), EarCanalCleaning=rdr.GetBoolean(9), AudiologyConsults=rdr.GetBoolean(10), DeviceCleaning=rdr.GetBoolean(11), Approved=rdr.GetBoolean(12)});
            }
            con.Close();
            return appointment;
        }
 
        public void AddAppointment(Appointment appointment)
        {
            Database database = new Database();
            using var con = database.GetPublicConnection();
            System.Console.WriteLine(appointment.HearingAids);
            string stm = @"Insert into Appointment (UserID, PayMethod, ApptLocation, HearingAids, EarmoldImpressions, CustomHearingProtection, EarCanalCleaning, AudiologyConsults, DeviceCleaning, ApptDate, Approved, ApptEndDate) VALUES(@UserID, @PayMethod, @ApptLocation, @HearingAids, @EarmoldImpressions, @CustomHearingProtection, @EarCanalCleaning, @AudiologyConsults, @DeviceCleaning, @ApptDate, @Approved, @ApptEndDate)";
            MySqlCommand cmd = new MySqlCommand(stm, con);
            con.Open();
            cmd.Parameters.AddWithValue("@UserID", appointment.UserID);
            cmd.Parameters.AddWithValue("@PayMethod", appointment.PayMethod);
            cmd.Parameters.AddWithValue("@ApptLocation", appointment.ApptLocation);
            cmd.Parameters.AddWithValue("@HearingAids", appointment.HearingAids);
            cmd.Parameters.AddWithValue("@EarmoldImpressions", appointment.EarmoldImpressions);
            cmd.Parameters.AddWithValue("@CustomHearingProtection", appointment.CustomHearingProtection);
            cmd.Parameters.AddWithValue("@EarCanalCleaning", appointment.EarCanalCleaning);
            cmd.Parameters.AddWithValue("@AudiologyConsults", appointment.AudiologyConsults);
            cmd.Parameters.AddWithValue("@DeviceCleaning", appointment.DeviceCleaning);
            cmd.Parameters.AddWithValue("@ApptDate", appointment.ApptDate);
            cmd.Parameters.AddWithValue("@Approved", appointment.Approved);
            cmd.Parameters.AddWithValue("@ApptEndDate", appointment.ApptEndDate);
            
 
            cmd.Prepare();
            cmd.ExecuteNonQuery();
            con.Close();
        }
    }
}
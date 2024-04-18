using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;
using api.database;


namespace api.models
{
    public class Appointment 
    {
        public int ApptID { get; set; }
        public int UserID { get; set;}
        public string PayMethod { get; set; }
        public string ApptLocation {get; set;}
        public string ApptTreatment { get; set;}
        public DateOnly ApptDate { get; set; }
        public TimeSpan ApptTime {get; set;}
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
                appointment.Add(new Appointment(){ApptID=rdr.GetInt32(0), UserID=rdr.GetInt32(1), PayMethod=rdr.GetString(2), ApptLocation=rdr.GetString(3), ApptTreatment=rdr.GetString(3), ApptDate= DateOnly.FromDateTime(rdr.GetDateTime(4)), ApptTime=rdr.GetDateTime(5).TimeOfDay, Approved=rdr.GetBoolean(6)});
            }
            con.Close();
            return appointment;
        }
 
        public void AddAppointment(Appointment appointment)
        {
            Database database = new Database();
            using var con = database.GetPublicConnection();
 
            string stm = @"Insert into Appointment (UserID, PayMethod, ApptLocation, ApptTreatment, ApptDate, ApptTime, Approved)";
            MySqlCommand cmd = new MySqlCommand(stm, con);
            con.Open();
            cmd.Parameters.AddWithValue("@UserID", appointment.UserID);
            cmd.Parameters.AddWithValue("@PayMethod", appointment.PayMethod);
            cmd.Parameters.AddWithValue("@ApptLocation", appointment.ApptLocation);
            cmd.Parameters.AddWithValue("@ApptTreatment", appointment.ApptTreatment);
            cmd.Parameters.AddWithValue("@ApptTime", appointment.ApptTime);
            cmd.Parameters.AddWithValue("@Approved", appointment.Approved);
 
            cmd.Prepare();
            cmd.ExecuteNonQuery();
            con.Close();
        }
    }
}
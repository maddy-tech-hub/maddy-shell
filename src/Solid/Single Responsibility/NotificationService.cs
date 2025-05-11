public class NotificationService {
    public void SendOTP(string medium)
    {
        if (medium == "email")
        {
            Console.WriteLine("Sending OTP via email.");
        }
        else if (medium == "sms")
        {
            Console.WriteLine("Sending OTP via SMS.");
        }
        else
        {
            Console.WriteLine("Invalid OTP medium.");
        }
    }
}
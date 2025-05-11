public class BankServiceBadEx
{
    public decimal Deposit(decimal amount, string accountNumber)
    {
        Console.WriteLine($"Deposited {amount} to account {accountNumber}");
        return amount;
    }

    public decimal Withdraw(decimal amount, string accountNumber)
    {
        Console.WriteLine($"Withdrew {amount} from account {accountNumber}");
        return amount;
    }

    public void PrintPassBook(string accountNumber)
    {
        Console.WriteLine($"Printing passbook for account {accountNumber}");
    }

    public void GetLoanInterestInfo(string loanType)
    {
        if (loanType == "homeloan")
        {
            Console.WriteLine("Home loan interest details.");
        }
        else if (loanType == "personalloan")
        {
            Console.WriteLine("Personal loan interest details.");
        }
        else
        {
            Console.WriteLine("Invalid loan type.");
        }
    }

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

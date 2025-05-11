public class LoanService {
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

}
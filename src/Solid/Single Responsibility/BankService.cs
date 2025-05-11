public class BankServiceBadEx {
 
    public decimal Deposit(decimal amount, string accountNumber)
    {
        Console.WriteLine($"Deposited {amount} to account {accountNumber}");
        return amount;
    }

    public decimal Withdraw(decimal amount, string accountNumber)
    {
        Console.WriteLine($"Withdraw {amount} from account {accountNumber}");
        return amount;
    }
}
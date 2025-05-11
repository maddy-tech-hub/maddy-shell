public class CreditCard
{
    public void Pay(decimal amount)
    {
        Console.WriteLine($"Paid {amount} using Credit Card.");
    }
}

public class DebitCard
{
    public void Pay(decimal amount)
    {
        Console.WriteLine($"Paid {amount} using Debit Card.");
    }
}

public class BankService
{
    private CreditCard _creditCard = new CreditCard(); // tightly coupled
    private DebitCard _debitCard = new DebitCard(); // tightly coupled

    public void MakePaymentUsingCreditCard(decimal amount)
    {
        _creditCard.Pay(amount);
    }

    public void MakePaymentUsingDebitCard(decimal amount)
    {
        _debitCard.Pay(amount);
    }
}

public class Program
{
    public static void Main()
    {
        var bankService = new BankService();
        bankService.MakePaymentUsingCreditCard(100);
        bankService.MakePaymentUsingDebitCard(50);
    }
}

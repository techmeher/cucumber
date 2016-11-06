package bank;

/**
 * Account class responsible for maintaining balances states
 * 
 * @author meher
 *
 */
public class Account {
	private int balance;

	public Account() {
	}

	public void deposit(int amount) {
		balance += amount;
	}

	public int getBalance() {
		return balance;
	}
}

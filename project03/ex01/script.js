function calculateGrade(score)
{	if(score !== "number" || score < 0 || score > 100)
		return ("Invalid"); 	

	 if(score >=  90)
		return("A");
	else if(score >= 80)
		return("B");
	else if(score >= 70)
		return("C");
	else if(score >= 60)
		return("D");
	else if(score >= 50)
		return("F");
}

function cheackAccess(age,hasTicket)
{
	if(typeof age ==="number" && typeof hasTicket ==="boolean")
	
	{
		if((age >= 18) && hasTicket==true)
			return true;
		else
			return false;
	}
	else
		return false;

}

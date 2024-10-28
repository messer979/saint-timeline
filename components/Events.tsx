interface HistoricalEvent {
	name: string;
	type: string;
	start: string;
	description: string;
	longDescription: string;
}

export const keyEvents: HistoricalEvent[] = [{
		name: "Council of Nicaea",
		type: 'point',
		start: '0325',
		description: "First Ecumenical Council that established foundational Christian doctrine.",
		longDescription: "The Council of Nicaea, convened by Emperor Constantine I in 325, was a pivotal moment in Church history, establishing key doctrines and combating heresy."
	}, 
	{
		name: "Edict of Milan",
		type: "point",
		start: "0313",
		description: "Legalized Christianity within the Roman Empire.",
		longDescription: "### Edict of Milan (313 AD)\n\nIn **313 AD**, Emperor **Constantine the Great** and Emperor **Licinius** issued the **Edict of Milan**, which proclaimed religious tolerance for Christianity within the **Roman Empire**. This decree allowed Christians to practice their faith openly without fear of persecution, marking a significant turning point for Christianity's status in Roman society."
	}, 
	{
		name: "Great Schism",
		type: "point",
		start: "1054",
		description: "Separation of Eastern Orthodox and Roman Catholic Churches.",
		longDescription: "### Great Schism (1054 AD)\n\nThe **Great Schism** of **1054 AD** was the formal division between the **Eastern Orthodox** and **Roman Catholic** Churches. Key disagreements over **theological issues** and **papal authority** led to this split, which has shaped the distinct traditions and doctrines of both churches. This event was formalized with the mutual excommunication of the **Pope** and the **Patriarch of Constantinople**."
	}, 
	{
		name: "Reformation",
		type: "point",
		start: "1517",
		description: "Movement leading to Protestantism initiated by Martin Luther.",
		longDescription: "### Reformation (1517 AD)\n\nIn **1517 AD**, **Martin Luther** ignited the **Protestant Reformation** by publishing his **95 Theses**, challenging the **Catholic Church** on issues such as the sale of indulgences and church authority. This movement led to the formation of various **Protestant denominations** and a significant transformation in Christian theology, religious practices, and church governance."
	}, 
	{
		name: "Council of Trent",
		type: "point",
		start: "1545",
		description: "Roman Catholic Church's response to the Reformation.",
		longDescription: "### Council of Trent (1545–1563)\n\nThe **Council of Trent**, held between **1545** and **1563**, was the **Catholic Church's** major response to the **Protestant Reformation**. Convened by **Pope Paul III**, the council addressed issues of doctrine, corrected abuses within the church, and reasserted core **Catholic beliefs**. It established measures for reforming church practices and redefined Catholic doctrine in ways that solidified differences between Catholic and Protestant theology."
	}, 
	{
		name: "Second Vatican Council",
		type: "point",
		start: "1962",
		description: "Ecumenical council that modernized many practices within the Catholic Church.",
		longDescription: "### Second Vatican Council (1962–1965)\n\nThe **Second Vatican Council** (1962–1965), also known as **Vatican II**, was an ecumenical council called by **Pope John XXIII** to address relationships between the **Catholic Church** and the modern world. Vatican II introduced reforms such as the use of local languages in **Mass**, greater emphasis on **ecumenism**, and increased **lay participation**. These changes were aimed at making the church more accessible and responsive to the needs of the contemporary world."
	}

];
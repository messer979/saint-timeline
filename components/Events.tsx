interface HistoricalEvent {
	name: string;
	type: string;
	start: string;
	end?: string;
	description: string;
	longDescription: string;
}

export const keyEvents: HistoricalEvent[] = [
	{
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
	}, 
	{
		name: "Creation",
		type: "point",
		start: "-004000",
		description: "God creates the heavens, earth, and all living things.",
		longDescription: "### Creation\n\nIn the **beginning**, **God** created the **heavens and the earth**. Over six days, God formed light, sky, land, seas, and all creatures, culminating in the creation of **Adam and Eve** as the first humans, made in God's image (Genesis 1-2)."
	}, 
	{
		name: "The Great Flood",
		type: "point",
		start: "-002348",
		description: "God floods the earth, sparing only Noah and his family.",
		longDescription: "### The Great Flood\n\nBecause of humanity's wickedness, God decides to flood the earth, saving only **Noah**, his family, and pairs of every animal species. The flood represents God's judgment but also His mercy, promising never to destroy the earth with water again and sealing this promise with a **rainbow** (Genesis 6-9)."
	}, 
	{
		name: "Tower of Babel",
		type: "point",
		start: "-002242",
		description: "God confuses the language of the people at Babel.",
		longDescription: "### Tower of Babel\n\nAfter the flood, humanity attempts to build a **tower** to reach the heavens. To curb their pride, God confuses their **language**, scattering them across the earth. This event explains the origin of diverse languages and cultures (Genesis 11)."
	}, 
	{
		name: "The Call of Abraham",
		type: "point",
		start: "-002000",
		description: "God calls Abraham to be the father of many nations.",
		longDescription: "### The Call of Abraham\n\nGod calls **Abram** (later Abraham) to leave his homeland and promises to make him the **father of many nations**. Abraham’s faith marks the beginning of God’s covenant with Israel, and he becomes a central figure in the faith histories of Judaism, Christianity, and Islam (Genesis 12)."
	}, 
	{
		name: "Destruction of Sodom and Gomorrah",
		type: "point",
		start: "-001900",
		description: "God destroys the cities of Sodom and Gomorrah for their wickedness.",
		longDescription: "### Destruction of Sodom and Gomorrah\n\nThe cities of **Sodom and Gomorrah** are destroyed by God due to their **wickedness** and disregard for righteous living. Only **Lot** and his daughters are saved, while Lot's wife turns to salt for looking back at the cities (Genesis 19)."
	}, 
	{
		name: "Birth of Isaac",
		type: "point",
		start: "-001896",
		description: "Isaac, son of Abraham and Sarah, is born.",
		longDescription: "### Birth of Isaac\n\nIn fulfillment of God's promise, **Isaac** is born to **Abraham** and **Sarah** in their old age. Isaac's birth is significant as he is considered the child of the covenant, continuing the lineage of Israel (Genesis 21)."
	}, 
	{
		name: "Joseph Sold into Slavery",
		type: "point",
		start: "-001728",
		description: "Joseph is sold by his brothers and later rises to power in Egypt.",
		longDescription: "### Joseph Sold into Slavery\n\n**Joseph**, one of Jacob's sons, is sold into slavery by his jealous brothers. He rises to power in **Egypt** and later saves his family during a famine, showing God’s providence and forgiveness (Genesis 37, 39-50)."
	}, 
	{
		name: "Exodus",
		type: "point",
		start: "-001446",
		description: "Moses leads the Israelites out of slavery in Egypt.",
		longDescription: "### The Exodus from Egypt\n\nMoses leads the **Israelites** out of Egypt, crossing the **Red Sea** with God's help. This event, known as the **Exodus**, is central to Israelite identity and marks God’s covenantal faithfulness (Exodus 12-14)."
	}, 
	{
		name: "Entering the Promised Land",
		type: "point",
		start: "-001406",
		description: "The Israelites enter Canaan under Joshua’s leadership.",
		longDescription: "### Entering the Promised Land\n\nAfter **40 years in the wilderness**, the Israelites, under the leadership of **Joshua**, cross the **Jordan River** and enter the **Promised Land** of Canaan. This fulfills God's promise to **Abraham** (Joshua 3-4)."
	}, 
	{
		name: "David Becomes King",
		type: "point",
		start: "-001010",
		description: "David is anointed king and unites Israel.",
		longDescription: "### David Becomes King\n\n**David**, a shepherd and warrior, becomes king over **Israel** and unites the tribes. His reign is marked by victories over Israel's enemies and the establishment of **Jerusalem** as the capital (2 Samuel 5)."
	}, 
	{
		name: "Building of Solomon's Temple",
		type: "point",
		start: "-000957",
		description: "Solomon builds the First Temple in Jerusalem.",
		longDescription: "### Building of Solomon's Temple\n\nKing **Solomon**, David's son, constructs the **First Temple** in **Jerusalem**, a permanent dwelling for the **Ark of the Covenant** and a central place of worship for the Israelites (1 Kings 6-8)."
	}, 
	{
		name: "The Babylonian Exile",
		type: "point",
		start: "-000586",
		description: "Jerusalem is destroyed, and the Israelites are exiled to Babylon.",
		longDescription: "### The Babylonian Exile\n\nThe **Babylonians** conquer **Jerusalem** in **586 BC**, destroy **Solomon's Temple**, and exile the Israelites to **Babylon**. This period of exile profoundly impacts the Jewish people and their relationship with God (2 Kings 25)."
	}, 
	{
		name: "Return from Babylonian Exile",
		type: "point",
		start: "-000538",
		description: "The Israelites return to Jerusalem from Babylonian exile by decree of Cyrus the Great.",
		longDescription: "### Return from Babylonian Exile\n\nIn **538 BC**, **Cyrus the Great**, king of **Persia**, issues a decree allowing the Israelites to return to **Jerusalem** after decades in exile. This return marks the beginning of the **Second Temple Period** and the restoration of the Jewish community in their homeland (Ezra 1)."
	}, 
	{
		name: "Rebuilding of the Second Temple",
		type: "point",
		start: "-000516",
		description: "The Second Temple is completed in Jerusalem.",
		longDescription: "### Rebuilding of the Second Temple\n\nAfter their return from **Babylonian exile**, the Israelites complete the construction of the **Second Temple** in **Jerusalem**. This temple becomes the spiritual center of Jewish worship until its destruction in 70 AD (Ezra 6)."
	}, 
	{
		name: "Greek Conquest and Influence",
		type: "point",
		start: "-000333",
		description: "Alexander the Great conquers the Persian Empire, bringing Greek influence to Israel.",
		longDescription: "### Greek Conquest and Influence\n\nIn **333 BC**, **Alexander the Great** conquers the **Persian Empire**, spreading **Hellenistic (Greek) culture** throughout the Middle East, including Israel. This period introduces **Greek language, culture, and philosophy**, impacting Jewish life and religious practices."
	}, 
	{
		name: "Prophecies of Daniel",
		type: "point",
		start: "-000300",
		description: "Daniel prophesies about future kingdoms and the coming of the Messiah.",
		longDescription: "### Prophecies of Daniel\n\n**Daniel**, a Jewish prophet during the **Babylonian and Persian** empires, has visions concerning the rise and fall of kingdoms, including **Babylon, Persia, Greece, and Rome**. His prophecies also foretell the coming of a **Messianic kingdom** (Daniel 7-12)."
	}, 
	{
		name: "Maccabean Revolt",
		type: "point",
		start: "-000167",
		description: "Jewish rebellion against the Seleucid Empire led by the Maccabees.",
		longDescription: "### Maccabean Revolt\n\nIn **167 BC**, **Judas Maccabeus** leads a Jewish revolt against the **Seleucid Empire** after the desecration of the **Second Temple** by **Antiochus IV Epiphanes**. This revolt results in Jewish independence and the rededication of the temple, commemorated in the holiday of **Hanukkah** (1 Maccabees)."
	}, 
	{
		name: "Roman Conquest of Judea",
		type: "point",
		start: "-000063",
		description: "Rome annexes Judea, bringing the region under Roman control.",
		longDescription: "### Roman Conquest of Judea\n\nIn **63 BC**, **Pompey the Great** of **Rome** conquers **Judea**, integrating it into the **Roman Empire**. This occupation profoundly impacts Jewish society and sets the stage for political tensions that will influence the time of **Jesus**."
	},
	{
	    name: "Birth of Samuel",
	    type: "point",
	    start: "-001080",
	    description: "Samuel, a prophet and the last judge of Israel, is born to Hannah.",
	    longDescription: "### Birth of Samuel\n\nAround **1080 BC**, **Hannah** dedicates her son **Samuel** to God’s service. Samuel grows to become a significant prophet and the final judge, overseeing Israel’s transition from a theocracy to a monarchy (1 Samuel 1)."
	  },
	 {
	    name: "The Ark of the Covenant Captured",
	    type: "point",
	    start: "-001050",
	    description: "The Philistines capture the Ark of the Covenant, signaling a low point in Israel’s faithfulness.",
	    longDescription: "### The Ark of the Covenant Captured by the Philistines\n\nIn **1050 BC**, the **Ark of the Covenant** is captured by the **Philistines** after Israel’s defeat at **Ebenezer**. This event underscores Israel’s spiritual decline and lack of faithfulness (1 Samuel 4)."
	  },
	 {
	    name: "Judges",
	    type: "point",
	    start: "-001380",
	    end: "-001050",
	    description: "Israel experiences cycles of rebellion and deliverance led by judges.",
	    longDescription: "### Period of the Judges Begins\n\nFrom around **1380 BC** to **1050 BC**, Israel is led by a series of **judges**, local leaders raised by God during times of crisis. The period is marked by cycles of disobedience, oppression, repentance, and deliverance, reflecting Israel’s struggle to remain faithful (Book of Judges)."
	  },
	 {
	    name: "Battle of Jericho",
	    type: "point",
	    start: "-001400",
	    description: "The Israelites capture Jericho, beginning their conquest of Canaan.",
	    longDescription: "### Battle of Jericho\n\nFollowing their entrance into Canaan, the Israelites besiege **Jericho**. After seven days of marching around the city walls and blowing trumpets, the walls collapse, leading to the city's capture. This victory initiates the conquest of **Canaan** (Joshua 6)."
	},
  {
    name: "1st Council of Const.",
    type: "point",
    start: "0381",
    description: "Confirmed the Nicene Creed and expanded on the doctrine of the Trinity.",
    longDescription: "### First Council of Constantinople\n\nIn **381 AD**, the **First Council of Constantinople** was held to reaffirm and expand the **Nicene Creed**. The council condemned Arianism and other heresies while affirming the divinity of the **Holy Spirit**, further clarifying the doctrine of the **Trinity**."
  },
  {
    name: "Council of Ephesus",
    type: "point",
    start: "0431",
    description: "Declared Mary as Theotokos (Mother of God) and condemned Nestorianism.",
    longDescription: "### Council of Ephesus\n\nHeld in **431 AD**, the **Council of Ephesus** addressed the Nestorian controversy, which claimed that Jesus had separate divine and human natures. The council affirmed that **Mary** could be called **Theotokos** (Mother of God), asserting the unity of Christ's divine and human natures. **Nestorianism** was condemned as a heresy."
  },
  {
    name: "Council of Chalcedon",
    type: "point",
    start: "0451",
    description: "Defined the two natures of Christ, both fully human and fully divine.",
    longDescription: "### Council of Chalcedon\n\nIn **451 AD**, the **Council of Chalcedon** established the doctrine of the **hypostatic union**, which states that Christ has two distinct natures—one divine and one human—united in a single person. This council condemned the monophysite belief that Christ only had a single, divine nature."
  },
  {
    name: "2nd Council of Const.",
    type: "point",
    start: "0553",
    description: "Condemned certain writings associated with Nestorianism and aimed to unify the Church.",
    longDescription: "### Second Council of Constantinople\n\nThe **Second Council of Constantinople**, held in **553 AD**, was convened to address lingering theological divisions. It condemned the **Three Chapters**—writings associated with **Nestorianism**—in an attempt to reconcile **Eastern** and **Western** factions within the Church."
  },
  {
    name: "3rd Council of Const.",
    type: "point",
    start: "0680",
    description: "Condemned Monothelitism, affirming that Christ has both a human and divine will.",
    longDescription: "### Third Council of Constantinople\n\nHeld from **680-681 AD**, the **Third Council of Constantinople** condemned **Monothelitism**, the belief that Christ had only one will. The council affirmed that Christ possesses both a **divine** and **human will**, which aligns with his dual nature as fully God and fully man."
  },
  {
    name: "Second Council of Nicaea",
    type: "point",
    start: "0787",
    description: "Restored the veneration of icons, declaring them an important aspect of Christian worship.",
    longDescription: "### Second Council of Nicaea\n\nIn **787 AD**, the **Second Council of Nicaea** was convened to resolve the **Iconoclast Controversy**. The council ruled in favor of the **veneration of icons** (religious images), establishing that they are worthy of honor as long as the worship is directed to God alone."
  },
  {
    name: "4th Council of Const.",
    type: "point",
    start: "0869",
    description: "Addressed the Photian Schism and issues within the Byzantine Church.",
    longDescription: "### Fourth Council of Constantinople\n\nHeld in **869 AD**, the **Fourth Council of Constantinople** addressed the **Photian Schism** and disciplinary matters within the **Byzantine Church**. This council reaffirmed earlier doctrinal decisions and condemned **Photius** as Patriarch of Constantinople."
  }
]

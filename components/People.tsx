interface HistoricalFigure {
  name: string;
  birthYear: string;
  deathYear: string;
  description: string;
  longDescription: string;
}

// export const people: Person[] = [
export const people: HistoricalFigure[] = [{
      name: "St. Peter",
      birthYear: "-000001",
      deathYear: "0064",
      description: "First Pope",
      longDescription: "One of Jesus Christ's twelve apostles, St. Peter is traditionally considered the first Pope of the Catholic Church. Known for his strong faith and impulsive nature, he was a leader among the apostles. Jesus referred to him as 'the rock' upon which the Church would be built, and he played a pivotal role in the early Christian community."
    }, 
    {
      name: "St. Paul",
      birthYear: "0005",
      deathYear: "0067",
      description: "Apostle to the Gentiles",
      longDescription: "Originally known as Saul, St. Paul was a Jewish Pharisee who persecuted Christians before his dramatic conversion to Christianity. After his conversion, he became known as the 'Apostle to the Gentiles,' traveling extensively and spreading the Gospel. His epistles are a significant part of the New Testament, and his theology profoundly shaped Christianity."
    }, 
    {
      name: "St. Jerome",
      birthYear: "0347",
      deathYear: "0420",
      description: "Translator of the Bible",
      longDescription: "A renowned scholar, theologian, and linguist, St. Jerome is best known for translating the Bible into Latin, known as the Vulgate. His translation made the Scriptures more accessible to the people of his time and remains a foundational text of the Church. Jerome's work and teachings greatly influenced Western Christianity."
    }, 
    {
      name: "St. Gregory the Great",
      birthYear: "0540",
      deathYear: "0604",
      description: "Pope and Doctor of the Church",
      longDescription: "As Pope, St. Gregory the Great made significant reforms to Church administration, liturgy, and music, initiating the development of what would later be called Gregorian Chant. He was also a prolific writer and is considered one of the four great Latin Doctors of the Church for his theological contributions and guidance."
    }, 
    {
      name: "St. Benedict of Nursia",
      birthYear: "0480",
      deathYear: "0547",
      description: "Founder of Western monasticism",
      longDescription: "Known as the 'Father of Western Monasticism,' St. Benedict established the Benedictine Order, with its hallmark Rule that balanced prayer, work, and community life. His emphasis on stability and simplicity had a lasting influence on Western monasticism and laid the groundwork for the Christian monastic tradition."
    }, 
    {
      name: "St. Dominic",
      birthYear: "1170",
      deathYear: "1221",
      description: "Founder of the Dominicans",
      longDescription: "St. Dominic founded the Dominican Order, a community of preachers dedicated to the intellectual defense of the faith. He was known for his deep devotion, strong commitment to poverty, and powerful preaching. The Dominicans played a central role in the Church's response to heresies and in the intellectual development of the Middle Ages."
    }, 
    {
      name: "St. Thomas Aquinas",
      birthYear: "1225",
      deathYear: "1274",
      description: "Doctor of the Church, theologian",
      longDescription: "A brilliant philosopher and theologian, St. Thomas Aquinas integrated Aristotelian philosophy with Christian doctrine in his seminal work, 'Summa Theologica.' His writings established a framework for Catholic theology that has been highly influential, earning him the title 'Doctor of the Church.'"
    }, 
    {
      name: "St. Clare of Assisi",
      birthYear: "1194",
      deathYear: "1253",
      description: "Founder of Poor Clares",
      longDescription: "A follower of St. Francis, St. Clare founded the Poor Clares, a contemplative order that emphasized poverty and prayer. Her life of faith and dedication to the Franciscan ideals inspired many, and her order has continued to flourish worldwide as a testament to her spiritual legacy."
    }, 
    {
      name: "St. Catherine of Siena",
      birthYear: "1347",
      deathYear: "1380",
      description: "Mystic and Doctor of the Church",
      longDescription: "A mystic and theologian, St. Catherine of Siena was instrumental in bringing the papacy back from Avignon to Rome. She was known for her intense spiritual life, visions, and letters to Church leaders. Declared a Doctor of the Church, her writings continue to influence Christian spirituality."
    }, 
    {
      name: "St. Teresa of Ávila",
      birthYear: "1515",
      deathYear: "1582",
      description: "Mystic and reformer",
      longDescription: "A Carmelite nun, mystic, and reformer, St. Teresa led the reform of the Carmelite Order. Her writings, including 'The Interior Castle,' detail her deep insights into contemplative prayer. She was declared a Doctor of the Church in recognition of her profound contributions to Christian mysticism and spirituality."
    }, 
    {
      name: "St. John of the Cross",
      birthYear: "1542",
      deathYear: "1591",
      description: "Carmelite mystic and poet",
      longDescription: "Known for his deep spirituality and mystical poetry, St. John of the Cross co-founded the Discalced Carmelites with St. Teresa of Ávila. His writings, particularly 'The Dark Night of the Soul,' explore the journey of the soul to union with God through suffering and purification."
    }, 
    {
      name: "St. Patrick",
      birthYear: "0385",
      deathYear: "0461",
      description: "Apostle of Ireland",
      longDescription: "St. Patrick is credited with bringing Christianity to Ireland. As a missionary bishop, he baptized thousands and established churches throughout Ireland. His legacy endures, with St. Patrick’s Day celebrated worldwide as a day of Irish heritage and Christian faith."
    }, 
    {
      name: "St. Ambrose",
      birthYear: "0340",
      deathYear: "0397",
      description: "Bishop of Milan",
      longDescription: "As Bishop of Milan, St. Ambrose was a key figure in the early Church, known for his defense of orthodoxy and influence over St. Augustine. He was a gifted orator and is considered one of the four great Latin Doctors of the Church for his contributions to theology and Church liturgy."
    }, 
    {
      name: "St. Francis Xavier",
      birthYear: "1506",
      deathYear: "1552",
      description: "Jesuit missionary",
      longDescription: "A close companion of St. Ignatius of Loyola, St. Francis Xavier was a missionary to Asia, particularly India, Japan, and other parts of the Far East. Known for his zeal, he is credited with thousands of conversions and is regarded as one of the Church’s greatest missionaries."
    },
    {
      name: "St. Athanasius",
      birthYear: "0296",
      deathYear: "0373",
      description: "Church Father, defender of the Trinity",
      longDescription: "St. Athanasius was an Egyptian bishop and theologian who staunchly defended the doctrine of the Trinity against Arianism. His writings, especially 'On the Incarnation,' laid foundational theological groundwork for the Church. He is celebrated as a champion of orthodoxy."
    }, 
    {
      name: "St. Basil the Great",
      birthYear: "0330",
      deathYear: "0379",
      description: "Father of Eastern monasticism",
      longDescription: "St. Basil the Great was a Cappadocian bishop known for his monastic reforms, charitable works, and defense of Nicene Christianity. His 'Rule' became the foundation of Eastern monasticism, and his theological writings greatly influenced the development of Christian doctrine."
    }, 
    {
      name: "St. John Chrysostom",
      birthYear: "0347",
      deathYear: "0407",
      description: "Early Church Father",
      longDescription: "St. John Chrysostom, renowned for his oratory skills, earned the title 'Golden Mouth.' His homilies and writings on the Bible offered deep spiritual insights, and he advocated for social justice and the reform of clergy. As Archbishop of Constantinople, he faced persecution but remained steadfast in his teachings."
    }, 
    {
      name: "St. Leo the Great",
      birthYear: "0400",
      deathYear: "0461",
      description: "Pope and Doctor of the Church",
      longDescription: "St. Leo the Great, as Pope, defended the Church against heresies and asserted papal authority in matters of faith. His 'Tome of Leo' was pivotal at the Council of Chalcedon in affirming Christ's dual nature. He also famously met with Attila the Hun, persuading him to spare Rome."
    }, 
    {
      name: "St. Martin of Tours",
      birthYear: "0316",
      deathYear: "0397",
      description: "Bishop and patron of soldiers",
      longDescription: "St. Martin of Tours, a former Roman soldier turned Christian, became the Bishop of Tours. Known for his humility and charity, he famously shared his cloak with a beggar. He is one of the first non-martyr saints and the patron saint of soldiers and France."
    }, 
    {
      name: "St. Anthony of Padua",
      birthYear: "1195",
      deathYear: "1231",
      description: "Doctor of the Church",
      longDescription: "St. Anthony of Padua was a Franciscan friar and a renowned preacher known for his deep theological insights and miracles. Revered for his powerful intercessions, he became known as the patron saint of lost items. His profound love for the poor and eloquent sermons made him a beloved saint."
    }, 
    {
      name: "St. Bonaventure",
      birthYear: "1217",
      deathYear: "1274",
      description: "Franciscan theologian",
      longDescription: "St. Bonaventure, a prominent theologian and Franciscan leader, wrote extensively on the relationship between faith and reason. Known as the 'Seraphic Doctor,' his works harmonized Franciscan spirituality with scholastic theology, and he contributed greatly to the Franciscan order."
    }, 
    {
      name: "St. Albert the Great",
      birthYear: "1206",
      deathYear: "1280",
      description: "Philosopher and scientist",
      longDescription: "St. Albert the Great was a Dominican scholar and teacher of St. Thomas Aquinas. Known for his vast knowledge of natural sciences and philosophy, he was called the 'Universal Doctor.' He bridged faith and reason, making significant contributions to the development of Western thought."
    }, 
    {
      name: "St. Therese of Lisieux",
      birthYear: "1873",
      deathYear: "1897",
      description: "The Little Flower",
      longDescription: "St. Therese of Lisieux, a Carmelite nun, is known for her 'little way' of spiritual childhood, emphasizing simplicity and trust in God. Her autobiography, 'Story of a Soul,' inspired millions. Canonized as the 'Little Flower,' she is a beloved saint and patroness of missions."
    }, 
    {
      name: "St. Joan of Arc",
      birthYear: "1412",
      deathYear: "1431",
      description: "French martyr and military leader",
      longDescription: "St. Joan of Arc, a young peasant girl, led the French army to victory during the Hundred Years' War. She claimed to hear voices of saints guiding her, ultimately leading to her capture and execution by the English. Canonized in 1920, she is celebrated as a symbol of courage and faith."
    }, 
    {
      name: "St. Bernadette Soubirous",
      birthYear: "1844",
      deathYear: "1879",
      description: "Lourdes visionary",
      longDescription: "St. Bernadette, a French peasant girl, reported visions of the Virgin Mary in Lourdes, France, where a spring with healing waters appeared. Her humility and simplicity captured the hearts of many, and Lourdes remains one of the world's most visited pilgrimage sites."
    }, 
    {
      name: "St. Elizabeth Ann Seton",
      birthYear: "1774",
      deathYear: "1821",
      description: "First American-born saint",
      longDescription: "St. Elizabeth Ann Seton was a widow and convert to Catholicism who founded the Sisters of Charity, the first American religious community. She established Catholic schools and orphanages, leaving a lasting legacy on Catholic education in the United States."
    }, 
    {
      name: "St. Kateri Tekakwitha",
      birthYear: "1656",
      deathYear: "1680",
      description: "First Native American saint",
      longDescription: "St. Kateri Tekakwitha, a Mohawk-Algonquin woman, converted to Christianity despite opposition. Known for her deep faith and purity, she led a life of devotion. Canonized in 2012, she is a symbol of resilience and spirituality among Indigenous Catholics."
    }, 
    {
      name: "St. Faustina Kowalska",
      birthYear: "1905",
      deathYear: "1938",
      description: "Divine Mercy visionary",
      longDescription: "St. Faustina Kowalska, a Polish nun, received visions of Jesus, who revealed to her the message of Divine Mercy. Her diary details these revelations and led to the establishment of Divine Mercy Sunday. She is known as the 'Apostle of Divine Mercy.'"
    }, 
    {
      name: "St. Maximilian Kolbe",
      birthYear: "1894",
      deathYear: "1941",
      description: "Martyr of Auschwitz",
      longDescription: "St. Maximilian Kolbe, a Polish Franciscan priest, offered his life in place of a fellow prisoner at Auschwitz. Known for his devotion to Mary, he is revered as a martyr of charity and an exemplar of self-sacrifice and faith in the face of evil."
    }, 
    {
      name: "St. Teresa of Calcutta",
      birthYear: "1910",
      deathYear: "1997",
      description: "Founder of the Missionaries of Charity",
      longDescription: "St. Teresa of Calcutta, also known as Mother Teresa, dedicated her life to serving the poorest of the poor. Founding the Missionaries of Charity, she ministered to the sick, dying, and abandoned, becoming a global symbol of compassion and love."
    }, 
    {
      name: "St. John Paul II",
      birthYear: "1920",
      deathYear: "2005",
      description: "Pope",
      longDescription: ""
    }, 
    {
      name: "St. Padre Pio",
      birthYear: "1887",
      deathYear: "1968",
      description: "A Capuchin friar known for his piety, charity, and bearing the stigmata, Padre Pio dedicated his life to prayer, confession, and spiritual guidance. He was known for his ability to read hearts and for miraculous healings, attracting followers worldwide.",
      longDescription: ""
    }, 
    {
      name: "St. Francis de Sales",
      birthYear: "1567",
      deathYear: "1622",
      description: " Doctor of the Church",
      longDescription: ""
    }, 
    {
      name: "St. Louis de Montfort",
      birthYear: "1673",
      deathYear: "1716",
      description: " Marian theologian",
      longDescription: ""
    }, 
    {
      name: "St. Alphonsus Liguori",
      birthYear: "1696",
      deathYear: "1787",
      description: " Founder of the Redemptorists",
      longDescription: ""
    }, 
    {
      name: "St. Vincent de Paul",
      birthYear: "1581",
      deathYear: "1660",
      description: " Patron of charitable societies",
      longDescription: ""
    }, 
    {
      name: "St. John Bosco",
      birthYear: "1815",
      deathYear: "1888",
      description: " Founder of the Salesians",
      longDescription: ""
    }, 
    {
      name: "St. Philip Neri",
      birthYear: "1515",
      deathYear: "1595",
      description: " Founder of the Oratory",
      longDescription: ""
    }, 
    {
      name: "St. Benedict Joseph Labre",
      birthYear: "1748",
      deathYear: "1783",
      description: " Patron saint of homeless people",
      longDescription: ""
    }, 
    {
      name: "St. Francis Borgia",
      birthYear: "1510",
      deathYear: "1572",
      description: " Jesuit leader",
      longDescription: ""
    }, 
    {
      name: "St. Charles Borromeo",
      birthYear: "1538",
      deathYear: "1584",
      description: " Archbishop of Milan",
      longDescription: ""
    }, 
    {
      name: "St. Thomas More",
      birthYear: "1478",
      deathYear: "1535",
      description: " Martyr under Henry VIII",
      longDescription: ""
    }, 
    {
      name: "St. John Fisher",
      birthYear: "1469",
      deathYear: "1535",
      description: " Martyr under Henry VIII",
      longDescription: ""
    }, 
    {
      name: "St. Rose of Lima",
      birthYear: "1586",
      deathYear: "1617",
      description: " First saint from the Americas",
      longDescription: ""
    }, 
    {
      name: "St. Damien of Molokai",
      birthYear: "1840",
      deathYear: "1889",
      description: " Apostle to lepers",
      longDescription: ""
    }, 
    {
      name: "St. Juan Diego",
      birthYear: "1474",
      deathYear: "1548",
      description: " Visionary of Our Lady of Guadalupe",
      longDescription: ""
    }, 
    {
      name: "St. Ignatius of Antioch",
      birthYear: "0035",
      deathYear: "0108",
      description: " Early martyr and Church Father",
      longDescription: ""
    }, 
    {
      name: "St. Polycarp",
      birthYear: "0069",
      deathYear: "0155",
      description: " Bishop, early martyr, disciple of St. John",
      longDescription: ""
    }, 
    {
      name: "St. Irenaeus of Lyons",
      birthYear: "0130",
      deathYear: "0202",
      description: " Early Church Father",
      longDescription: ""
    }, 
    {
      name: "St. Justin Martyr",
      birthYear: "0100",
      deathYear: "0165",
      description: " Early Christian apologist",
      longDescription: ""
    }, 
    {
      name: "St. Anselm of Canterbury",
      birthYear: "1033",
      deathYear: "1109",
      description: "Doctor of the Church, philosopher, and theologian",
      longDescription: ""
    }, 
    {
      name: "St. Boniface",
      birthYear: "0675",
      deathYear: "0754",
      description: "Apostle of Germany",
      longDescription: ""
    }, 
    {
      name: "St. Gregory of Nazianzus",
      birthYear: "0329",
      deathYear: "0390",
      description: "Doctor of the Church, theologian",
      longDescription: ""
    }, 
    {
      name: "St. Cyril of Alexandria",
      birthYear: "0376",
      deathYear: "0444",
      description: "Patriarch of Alexandria, Doctor of the Church",
      longDescription: ""
    }, 
    {
      name: "St. Cyril of Jerusalem",
      birthYear: "0313",
      deathYear: "0386",
      description: "Bishop of Jerusalem, Doctor of the Church",
      longDescription: ""
    }, 
    {
      name: "St. Ephrem the Syrian",
      birthYear: "0306",
      deathYear: "0373",
      description: "Doctor of the Church, theologian and hymnographer",
      longDescription: ""
    }, 
    {
      name: "St. Hilary of Poitiers",
      birthYear: "0310",
      deathYear: "0367",
      description: "Doctor of the Church, defender of the Trinity",
      longDescription: ""
    }, 
    {
      name: "St. Isidore of Seville",
      birthYear: "0560",
      deathYear: "0636",
      description: "Doctor of the Church, encyclopedist",
      longDescription: ""
    }, 
    {
      name: "St. John Damascene",
      birthYear: "0675",
      deathYear: "0749",
      description: "Doctor of the Church, theologian and hymnographer",
      longDescription: ""
    }, 
    {
      name: "St. Lawrence of Rome",
      birthYear: "0225",
      deathYear: "0258",
      description: "Martyr and deacon of the early Church",
      longDescription: ""
    }, 
    {
      name: "St. Cecilia",
      birthYear: "0200",
      deathYear: "0230",
      description: "Patron saint of music and musicians",
      longDescription: ""
    }, 
    {
      name: "St. Agnes of Rome",
      birthYear: "0291",
      deathYear: "0304",
      description: "Virgin and martyr",
      longDescription: ""
    }, 
    {
      name: "St. Perpetua",
      birthYear: "0182",
      deathYear: "0203",
      description: "Early Christian martyr",
      longDescription: "St. Perpetua was a noblewoman in Carthage, North Africa, who, along with her slave St. Felicity, was martyred for her faith. Her prison diary, which describes her steadfast faith and courage, is one of the earliest Christian writings by a woman and provides a unique insight into early Christian life and martyrdom."
    }, 
    {
      name: "St. Felicity",
      birthYear: "0180",
      deathYear: "0203",
      description: "Early Christian martyr, companion of St. Perpetua",
      longDescription: "St. Felicity was a young slave and a Christian who was imprisoned with St. Perpetua. Despite being pregnant, she remained committed to her faith and faced martyrdom alongside Perpetua. Their story of shared faith and courage inspired generations of Christians in North Africa and beyond."
    }, 
    {
      name: "St. Ignatius of Loyola",
      birthYear: "1491",
      deathYear: "1556",
      description: "Founder of the Society of Jesus (Jesuits)",
      longDescription: "St. Ignatius of Loyola was a Spanish soldier who, after a severe injury, underwent a profound religious conversion. He founded the Society of Jesus, also known as the Jesuits, emphasizing education, missionary work, and spiritual exercises, which have had a lasting impact on the Catholic Church worldwide."
    }, 
    {
      name: "St. John Vianney",
      birthYear: "1786",
      deathYear: "1859",
      description: "Patron saint of parish priests",
      longDescription: "Known as the 'Curé of Ars,' St. John Vianney was a French parish priest renowned for his dedication to the sacrament of confession and pastoral care. Despite early struggles in seminary, he became a model of priestly life and is revered for his holiness and humble service."
    }, 
    {
      name: "St. Vincent Ferrer",
      birthYear: "1350",
      deathYear: "1419",
      description: "Dominican preacher and missionary",
      longDescription: "St. Vincent Ferrer was a Spanish Dominican friar known for his charismatic preaching across Europe. He promoted repentance and conversion, playing a crucial role in the religious renewal of his time. Vincent is often depicted with wings, symbolizing his travels as a missionary."
    }, 
    {
      name: "St. Nicholas of Myra",
      birthYear: "0270",
      deathYear: "0343",
      description: "Bishop, patron of children and sailors",
      longDescription: "St. Nicholas was a Greek bishop known for his charity and generosity. Many stories recount his anonymous gifts to the needy, leading to his association with Santa Claus in popular culture. He is revered as a protector of children and sailors and a model of Christian charity."
    }, 
    {
      name: "St. Gregory of Nyssa",
      birthYear: "0335",
      deathYear: "0395",
      description: "Early Church Father, theologian",
      longDescription: "St. Gregory of Nyssa was a philosopher and theologian whose works profoundly influenced Christian thought. A key figure in the development of Trinitarian theology, he was instrumental in defending the faith against Arianism and contributed greatly to mystical theology and spiritual writings."
    }, 
    {
      name: "St. Clare of Montefalco",
      birthYear: "1268",
      deathYear: "1308",
      description: "Abbess and mystic",
      longDescription: "St. Clare of Montefalco was an Italian abbess and mystic known for her devotion to Christ's Passion. She reported visionary experiences, including bearing the symbols of the Passion in her heart, and emphasized a life of penance and prayer within the Augustinian order."
    }, 
    {
      name: "St. Sebastian",
      birthYear: "0256",
      deathYear: "0288",
      description: "Martyr and patron of athletes",
      longDescription: "St. Sebastian, a Roman soldier, was known for his strength and courage in defending his faith. Martyred under Emperor Diocletian, he survived an initial execution by arrows only to be martyred again. He became a symbol of resilience and is a patron of athletes and soldiers."
    }, 
    {
      name: "St. George",
      birthYear: "0275",
      deathYear: "0303",
      description: "Martyr and patron saint of England",
      longDescription: "St. George, a Roman soldier, is best known for the legendary tale of slaying a dragon to save a village, symbolizing his triumph over evil. Widely revered as a martyr, he is celebrated as a patron saint in various cultures, particularly in England, symbolizing courage and faith."
    }, 
    {
      name: "St. Lucy",
      birthYear: "0283",
      deathYear: "0304",
      description: "Virgin and martyr, patroness of the blind",
      longDescription: "St. Lucy was a young Christian martyr who chose death rather than renounce her faith. Known for her piety and courage, she is often depicted holding a lamp or her eyes on a dish, symbolizing her role as the patroness of the blind and those with vision-related issues."
    }, 
    {
      name: "St. Mary Magdalene",
      birthYear: "-000003",
      deathYear: "0063",
      description: "Disciple of Christ and witness to the Resurrection",
      longDescription: "St. Mary Magdalene is one of the most significant female figures in the New Testament, known for her deep faith in Jesus and her role as the first witness to the Resurrection. Traditionally associated with repentance, she is revered as the 'Apostle to the Apostles.'"
    }, 
    {
      name: "St. John the Baptist",
      birthYear: "-000006",
      deathYear: "0030",
      description: "Precursor of Christ, prophet",
      longDescription: "St. John the Baptist is a major prophetic figure who prepared the way for Christ by preaching repentance and baptizing Jesus in the Jordan River. He is known for his ascetic lifestyle and fearless proclamation, ultimately being martyred by King Herod for his teachings."
    }, 
    {
      name: "St. Andrew the Apostle",
      birthYear: "0006",
      deathYear: "0060",
      description: "Apostle, patron saint of Scotland",
      longDescription: "St. Andrew, brother of St. Peter, was one of the first disciples called by Jesus. Known for his missionary zeal, he is honored as the patron saint of Scotland and is believed to have been martyred on an X-shaped cross, known today as 'St. Andrew's Cross.'"
    }, 
    {
      name: "St. James the Greater",
      birthYear: "0000",
      deathYear: "0044",
      description: "Apostle and martyr",
      longDescription: "St. James the Greater, brother of St. John, was one of Jesus' closest disciples. Known for his fiery zeal, he was the first apostle to be martyred. His remains are said to be in Santiago de Compostela, Spain, making it a major pilgrimage site in Christendom."
    }, 
    {
      name: "St. Anthony the Great",
      birthYear: "0251",
      deathYear: "0356",
      description: "Father of monasticism",
      longDescription: "St. Anthony the Great is regarded as the founder of Christian monasticism. Renouncing his wealth, he lived a life of solitude in the Egyptian desert, where he inspired countless followers to embrace asceticism, laying the foundations for monastic communities."
    }, 
    {
      name: "St. Teresa Benedicta of the Cross (Edith Stein)",
      birthYear: "1891",
      deathYear: "1942",
      description: "Jewish convert, martyr",
      longDescription: "St. Teresa Benedicta of the Cross, born Edith Stein, was a German-Jewish philosopher who converted to Christianity and joined the Carmelite order. She was martyred in Auschwitz during the Holocaust, and her life exemplifies faith and interfaith dialogue."
    }, 
    {
      name: "St. Elizabeth of Hungary",
      birthYear: "1207",
      deathYear: "1231",
      description: "Princess, patron of the poor",
      longDescription: "St. Elizabeth of Hungary was a princess known for her deep compassion and commitment to the poor. After her husband's death, she devoted herself to charity, founding hospitals and caring for the sick. She is celebrated as a model of Christian charity and selflessness."
    }, 
    {
      name: "St. Louis of France",
      birthYear: "1214",
      deathYear: "1270",
      description: "King of France, patron of the Third Order of St. Francis",
      longDescription: "St. Louis IX was a devout King of France known for his just rule and dedication to faith. He led two Crusades and worked tirelessly to support the Church and protect his people. He is honored as a patron of the Third Order of St. Francis and a model of Christian leadership."
    }, 
    {
      name: "St. Zita of Lucca",
      birthYear: "1212",
      deathYear: "1272",
      description: "Patroness of domestic workers",
      longDescription: "St. Zita was a humble servant in Lucca, Italy, who was known for her devout life and tireless service to others. Her kindness and generosity eventually led her to be revered as the patroness of domestic workers, embodying the Christian values of humility and service."
    }, 
    {
      name: "St. Bridget of Sweden",
      birthYear: "1303",
      deathYear: "1373",
      description: "Founder of the Bridgettines, mystic",
      longDescription: "Founder of the Bridgettines, mystic"
    }, 
    {
      name: "St. Margaret of Scotland",
      birthYear: "1045",
      deathYear: "1093",
      description: "Queen of Scotland, patroness of widows",
      longDescription: "Queen of Scotland, patroness of widows"
    }, 
    {
      name: "St. Hedwig of Silesia",
      birthYear: "1174",
      deathYear: "1243",
      description: "Duchess, patron of brides",
      longDescription: "Duchess, patron of brides"
    }, 
    {
      name: "St. Gertrude the Great",
      birthYear: "1256",
      deathYear: "1302",
      description: "Mystic and theologian",
      longDescription: "Mystic and theologian"
    }, 
    {
      name: "St. Charles Lwanga",
      birthYear: "1860",
      deathYear: "1886",
      description: "Ugandan martyr, patron of African youth",
      longDescription: "Ugandan martyr, patron of African youth"
    }, 
    {
      name: "Adam",
      birthYear: '-004000',
      deathYear: '-003070',
      description: "First human, according to the Bible",
      longDescription: "First human, according to the Bible"
    }, 
    {
      name: "Eve",
      birthYear: '-004000',
      deathYear: '-003070',
      description: "First woman, according to the Bible",
      longDescription: "First woman, according to the Bible"
    }, 
    {
      name: "Noah",
      birthYear: '-002940',
      deathYear: '-001995',
      description: "Built the Ark, survived the Flood",
      longDescription: "Built the Ark, survived the Flood"
    }, 
    {
      name: "Abraham",
      birthYear: '-002150',
      deathYear: '-002000',
      description: "Patriarch of the Israelites, father of Isaac",
      longDescription: "Patriarch of the Israelites, father of Isaac"
    }, 
    {
      name: "Sarah",
      birthYear: '-002130',
      deathYear: '-002020',
      description: "Wife of Abraham, mother of Isaac",
      longDescription: "Wife of Abraham, mother of Isaac"
    }, 
    {
      name: "Isaac",
      birthYear: '-002040',
      deathYear: '-001822',
      description: "Son of Abraham, father of Jacob and Esau",
      longDescription: "Son of Abraham, father of Jacob and Esau"
    }, 
    {
      name: "Rebekah",
      birthYear: '-002030',
      deathYear: '-001880',
      description: "Wife of Isaac, mother of Jacob and Esau",
      longDescription: "Wife of Isaac, mother of Jacob and Esau"
    }, 
    {
      name: "Jacob",
      birthYear: '-001990',
      deathYear: '-001837',
      description: "Patriarch, also called Israel, father of the 12 tribes",
      longDescription: "Patriarch, also called Israel, father of the 12 tribes"
    }, 
    {
      name: "Leah",
      birthYear: '-001975',
      deathYear: '-001830',
      description: "First wife of Jacob, mother of six sons",
      longDescription: "First wife of Jacob, mother of six sons"
    }, 
    {
      name: "Rachel",
      birthYear: '-001975',
      deathYear: '-001850',
      description: "Second wife of Jacob, mother of Joseph and Benjamin",
      longDescription: "Second wife of Jacob, mother of Joseph and Benjamin"
    }, 
    {
      name: "Joseph",
      birthYear: '-001910',
      deathYear: '-001800',
      description: "Son of Jacob, sold into slavery, became an Egyptian ruler",
      longDescription: "Son of Jacob, sold into slavery, became an Egyptian ruler"
    }, 
    {
      name: "Moses",
      birthYear: '-001391',
      deathYear: '-001271',
      description: "Led the Israelites out of Egypt, received the Ten Commandments",
      longDescription: "Led the Israelites out of Egypt, received the Ten Commandments"
    }, 
    {
      name: "Aaron",
      birthYear: '-001395',
      deathYear: '-001273',
      description: "Brother of Moses, first high priest of the Israelites",
      longDescription: "Brother of Moses, first high priest of the Israelites"
    }, 
    {
      name: "Miriam",
      birthYear: '-001400',
      deathYear: '-001270',
      description: "Sister of Moses and Aaron, prophetess",
      longDescription: "Sister of Moses and Aaron, prophetess"
    }, 
    {
      name: "Joshua",
      birthYear: '-001355',
      deathYear: '-001244',
      description: "Successor of Moses, led the Israelites into the Promised Land",
      longDescription: "Successor of Moses, led the Israelites into the Promised Land"
    }, 
    {
      name: "Samson",
      birthYear: '-001150',
      deathYear: '-001120',
      description: "Judge of Israel, known for his great strength",
      longDescription: "Judge of Israel, known for his great strength"
    }, 
    {
      name: "Samuel",
      birthYear: '-001110',
      deathYear: '-001010',
      description: "Prophet and last judge of Israel, anointed Saul and David",
      longDescription: "Prophet and last judge of Israel, anointed Saul and David"
    }, 
    {
      name: "Saul",
      birthYear: '-001085',
      deathYear: '-001045',
      description: "First king of Israel, father of Jonathan and Michal",
      longDescription: "First king of Israel, father of Jonathan and Michal"
    }, 
    {
      name: "David",
      birthYear: '-001040',
      deathYear: '-000970',
      description: "Second king of Israel, slayer of Goliath, father of Solomon",
      longDescription: "Second king of Israel, slayer of Goliath, father of Solomon"
    }, 
    {
      name: "Jonathan",
      birthYear: '-001065',
      deathYear: '-001045',
      description: "Son of Saul, friend of David",
      longDescription: "Son of Saul, friend of David"
    }, 
    {
      name: "Bathsheba",
      birthYear: '-001015',
      deathYear: '-000950',
      description: "Wife of David, mother of Solomon",
      longDescription: "Wife of David, mother of Solomon"
    }, 
    {
      name: "Solomon",
      birthYear: '-001010',
      deathYear: '-000931',
      description: "King of Israel, known for wisdom, built the First Temple",
      longDescription: "King of Israel, known for wisdom, built the First Temple"
    }, 
    {
      name: "Rehoboam",
      birthYear: '-000972',
      deathYear: '-000913',
      description: "Son of Solomon, first king of Judah",
      longDescription: "Son of Solomon, first king of Judah"
    }, 
    {
      name: "Jeroboam",
      birthYear: '-000975',
      deathYear: '-000910',
      description: "First king of the northern Kingdom of Israel",
      longDescription: "First king of the northern Kingdom of Israel"
    }, 
    {
      name: "Elijah",
      birthYear: '-000900',
      deathYear: '-000849',
      description: "Prophet, defended worship of Yahweh",
      longDescription: "Prophet, defended worship of Yahweh"
    }, 
    {
      name: "Elisha",
      birthYear: '-000850',
      deathYear: '-000800',
      description: "Prophet, successor of Elijah",
      longDescription: "Prophet, successor of Elijah"
    }, 
    {
      name: "Isaiah",
      birthYear: '-000765',
      deathYear: '-000695',
      description: "Prophet, predicted the coming of the Messiah",
      longDescription: "Prophet, predicted the coming of the Messiah"
    }, 
    {
      name: "Jeremiah",
      birthYear: '-000650',
      deathYear: '-000570',
      description: "Prophet, witnessed the fall of Jerusalem",
      longDescription: "Prophet, witnessed the fall of Jerusalem"
    }, 
    {
      name: "Ezekiel",
      birthYear: '-000622',
      deathYear: '-000570',
      description: "Prophet, known for visions including the valley of dry bones",
      longDescription: "Prophet, known for visions including the valley of dry bones"
    }, 
    {
      name: "Daniel",
      birthYear: '-000620',
      deathYear: '-000538',
      description: "Prophet, interpreter of dreams, survived the lions' den",
      longDescription: "Prophet, interpreter of dreams, survived the lions' den"
    }, 
    {
      name: "Hosea",
      birthYear: '-000785',
      deathYear: '-000725',
      description: "Prophet, known for his message of repentance",
      longDescription: "Prophet, known for his message of repentance"
    }, 
    {
      name: "Joel",
      birthYear: '-000835',
      deathYear: '-000805',
      description: "Prophet, author of the Book of Joel",
      longDescription: "Prophet, author of the Book of Joel"
    }, 
    {
      name: "Amos",
      birthYear: '-000765',
      deathYear: '-000750',
      description: "Prophet, known for his call for social justice",
      longDescription: "Prophet, known for his call for social justice"
    }, 
    {
      name: "Obadiah",
      birthYear: '-000850',
      deathYear: '-000820',
      description: "Prophet, author of the shortest book in the Old Testament",
      longDescription: "Prophet, author of the shortest book in the Old Testament"
    }, 
    {
      name: "Jonah",
      birthYear: '-000780',
      deathYear: '-000750',
      description: "Prophet, swallowed by a great fish",
      longDescription: "Prophet, swallowed by a great fish"
    }, 
    {
      name: "Micah",
      birthYear: '-000750',
      deathYear: '-000687',
      description: "Prophet, warned of judgment but foretold hope",
      longDescription: "Prophet, warned of judgment but foretold hope"
    }, 
    {
      name: "Nahum",
      birthYear: '-000720',
      deathYear: '-000680',
      description: "Prophet, foretold the fall of Nineveh",
      longDescription: "Prophet, foretold the fall of Nineveh"
    }, 
    {
      name: "Habakkuk",
      birthYear: '-000650',
      deathYear: '-000620',
      description: "Prophet, known for dialogue with God about justice",
      longDescription: "Prophet, known for dialogue with God about justice"
    }, 
    {
      name: "Zephaniah",
      birthYear: '-000640',
      deathYear: '-000610',
      description: "Prophet, warned of the Day of the Lord",
      longDescription: "Prophet, warned of the Day of the Lord"
    }, 
    {
      name: "Haggai",
      birthYear: '-000520',
      deathYear: '-000500',
      description: "Prophet, encouraged rebuilding of the Temple",
      longDescription: "Prophet, encouraged rebuilding of the Temple"
    }, 
    {
      name: "Zechariah",
      birthYear: '-000520',
      deathYear: '-000480',
      description: "Prophet, foretold the coming of the Messiah",
      longDescription: "Prophet, foretold the coming of the Messiah"
    }, 
    {
      name: "Malachi",
      birthYear: '-000460',
      deathYear: '-000430',
      description: "Prophet, called for faithfulness and repentance",
      longDescription: "Prophet, called for faithfulness and repentance"
    }, 
    {
      name: "Ezra",
      birthYear: '-000480',
      deathYear: '-000440',
      description: "Priest and scribe, led return of the exiles to Jerusalem",
      longDescription: "Priest and scribe, led return of the exiles to Jerusalem"
    }, 
    {
      name: "Nehemiah",
      birthYear: '-000480',
      deathYear: '-000430',
      description: "Governor, rebuilt the walls of Jerusalem",
      longDescription: "Governor, rebuilt the walls of Jerusalem"
    }, 
    {
      name: "Esther",
      birthYear: '-000500',
      deathYear: '-000460',
      description: "Queen of Persia, saved the Jews from destruction",
      longDescription: "Queen of Persia, saved the Jews from destruction"
    }, 
    {
      name: "Mordecai",
      birthYear: '-000500',
      deathYear: '-000460',
      description: "Guardian of Esther, helped save the Jews",
      longDescription: "Guardian of Esther, helped save the Jews"
    }, 
    {
      name: "Job",
      birthYear: '-001800',
      deathYear: '-001700',
      description: "Subject of the Book of Job, known for his patience in suffering",
      longDescription: "Subject of the Book of Job, known for his patience in suffering"
    }, 
    {
      name: "Judas Maccabeus",
      birthYear: '-000190',
      deathYear: '-000160',
      description: "Son of Mattathias, leader of the Maccabean revolt, known for his military prowess",
      longDescription: "Son of Mattathias, leader of the Maccabean revolt, known for his military prowess"
    }]
interface HistoricalFigure {
  name: string;
  birthYear: string;
  deathYear: string;
  description: string;
  longDescription: string;
  tags: string[];
}

const tags = ["abbot", "apostle", "bishop", "contemplative", "doctor of the church", "martyr", "missionary", "monastic founder", "mystic", "philosopher", "poet", "pope", "preacher", "reformer", "scholar", "theologian", "visionary", "virgin", "confessor"];

// export const people: Person[] = [
export const people: HistoricalFigure[] = [{
  name: "St. Peter",
  birthYear: "-000001",
  deathYear: "0064",
  description: "First Pope",
  longDescription: "One of Jesus Christ's twelve apostles, St. Peter is traditionally considered the first Pope of the Catholic Church. Known for his strong faith and impulsive nature, he was a leader among the apostles. Jesus referred to him as 'the rock' upon which the Church would be built, and he played a pivotal role in the early Christian community.  \n\nNames: Πέτρος/Petros (Greek), כֵּיפָא/Cephas (Aramaic), Simon Peter",
  tags: ["apostle", "pope", "martyr"]
},
{
  name: "St. Paul",
  birthYear: "0005",
  deathYear: "0067",
  description: "Apostle to the Gentiles",
  longDescription: "Originally known as Saul, St. Paul was a Jewish Pharisee who persecuted Christians before his dramatic conversion to Christianity. After his conversion, he became known as the 'Apostle to the Gentiles,' traveling extensively and spreading the Gospel. His epistles are a significant part of the New Testament, and his theology profoundly shaped Christianity.\n\nNames:  Παῦλος/Paulos (Greek), שָׁאוּל/Sha'ul (Hebrew - original name Saul), Paulus (Latin)",
  tags: ["apostle", "martyr", "theologian"]
},
{
  name: "St. Jerome",
  birthYear: "0347",
  deathYear: "0420",
  description: "Translator of the Bible",
  longDescription: "A renowned scholar, theologian, and linguist, St. Jerome is best known for translating the Bible into Latin, known as the Vulgate. His translation made the Scriptures more accessible to the people of his time and remains a foundational text of the Church. Jerome's work and teachings greatly influenced Western Christianity.\n\nNames:  Ἱερώνυμος/Hieronymos (Greek), Eusebius Sophronius Hieronymus (Latin)",
  tags: ["doctor of the church", "theologian", "scholar"]
},
{
  name: "St. Gregory the Great",
  birthYear: "0540",
  deathYear: "0604",
  description: "Pope and Doctor of the Church",
  longDescription: "As Pope, St. Gregory the Great made significant reforms to Church administration, liturgy, and music, initiating the development of what would later be called Gregorian Chant. He was also a prolific writer and is considered one of the four great Latin Doctors of the Church for his theological contributions and guidance.\n\nNames:  Gregorius Magnus (Latin), Γρηγόριος/Gregorios (Greek)",
  tags: ["pope", "doctor of the church", "theologian"]
},
{
  name: "St. Benedict of Nursia",
  birthYear: "0480",
  deathYear: "0547",
  description: "Founder of Western monasticism",
  longDescription: "Known as the 'Father of Western Monasticism,' St. Benedict established the Benedictine Order, with its hallmark Rule that balanced prayer, work, and community life. His emphasis on stability and simplicity had a lasting influence on Western monasticism and laid the groundwork for the Christian monastic tradition.\n\nNames:  Benedictus (Latin), Βενέδικτος/Benediktos (Greek)",
  tags: ["monastic founder", "abbot"]
},
{
  name: "St. Dominic",
  birthYear: "1170",
  deathYear: "1221",
  description: "Founder of the Dominicans",
  longDescription: "St. Dominic founded the Dominican Order, a community of preachers dedicated to the intellectual defense of the faith. He was known for his deep devotion, strong commitment to poverty, and powerful preaching. The Dominicans played a central role in the Church's response to heresies and in the intellectual development of the Middle Ages.\n\nNames:  Dominicus (Latin), Santo Domingo (Spanish)",
  tags: ["monastic founder", "preacher"]
},
{
  name: "St. Thomas Aquinas",
  birthYear: "1225",
  deathYear: "1274",
  description: "Doctor of the Church, theologian",
  longDescription: "A brilliant philosopher and theologian, St. Thomas Aquinas integrated Aristotelian philosophy with Christian doctrine in his seminal work, 'Summa Theologica.' His writings established a framework for Catholic theology that has been highly influential, earning him the title 'Doctor of the Church.'\n\nNames:  Thomas Aquinas (Latin), Tommaso d'Aquino (Italian)",
  tags: ["doctor of the church", "theologian", "philosopher"]
},
{
  name: "St. Clare of Assisi",
  birthYear: "1194",
  deathYear: "1253",
  description: "Founder of Poor Clares",
  longDescription: "A follower of St. Francis, St. Clare founded the Poor Clares, a contemplative order that emphasized poverty and prayer. Her life of faith and dedication to the Franciscan ideals inspired many, and her order has continued to flourish worldwide as a testament to her spiritual legacy.\n\nNames:  Clara (Latin), Chiara d'Assisi (Italian)",
  tags: ["monastic founder", "contemplative"]
},
{
  name: "St. Catherine of Siena",
  birthYear: "1347",
  deathYear: "1380",
  description: "Mystic and Doctor of the Church",
  longDescription: "A mystic and theologian, St. Catherine of Siena was instrumental in bringing the papacy back from Avignon to Rome. She was known for her intense spiritual life, visions, and letters to Church leaders. Declared a Doctor of the Church, her writings continue to influence Christian spirituality.\n\nNames:  Caterina da Siena (Italian), Catharina Senensis (Latin)",
  tags: ["doctor of the church", "mystic", "theologian"]
},
{
  name: "St. Teresa of Ávila",
  birthYear: "1515",
  deathYear: "1582",
  description: "Mystic and reformer",
  longDescription: "A Carmelite nun, mystic, and reformer, St. Teresa led the reform of the Carmelite Order. Her writings, including 'The Interior Castle,' detail her deep insights into contemplative prayer. She was declared a Doctor of the Church in recognition of her profound contributions to Christian mysticism and spirituality.\n Names: Teresa de Ávila (Spanish), Teresa de Jesús (Spanish)",
  tags: ["doctor of the church", "mystic", "contemplative", "reformer"]
},
{
  name: "St. John of the Cross",
  birthYear: "1542",
  deathYear: "1591",
  description: "Carmelite mystic and poet",
  longDescription: "Known for his deep spirituality and mystical poetry, St. John of the Cross co-founded the Discalced Carmelites with St. Teresa of Ávila. His writings, particularly 'The Dark Night of the Soul,' explore the journey of the soul to union with God through suffering and purification.\nNames: Juan de la Cruz (Spanish), Juan de Yepes (Spanish birth name)",
  tags: ["doctor of the church", "mystic", "poet", "reformer"]
},
{
  name: "St. Patrick",
  birthYear: "0385",
  deathYear: "0461",
  description: "Apostle of Ireland",
  longDescription: "St. Patrick is credited with bringing Christianity to Ireland. As a missionary bishop, he baptized thousands and established churches throughout Ireland. His legacy endures, with St. Patrick’s Day celebrated worldwide as a day of Irish heritage and Christian faith.\n\n Names: Patricius (Latin), Pádraig (Irish Gaelic), Maewyn Succat (birth name)",
  tags: ["bishop", "missionary", "confessor"]
}, {
  name: "St. Ambrose",
  birthYear: "0340",
  deathYear: "0397",
  description: "Bishop of Milan",
  longDescription: "As Bishop of Milan, St. Ambrose was a key figure in the early Church, known for his defense of orthodoxy and influence over St. Augustine. He was a gifted orator and is considered one of the four great Latin Doctors of the Church for his contributions to theology and Church liturgy.\n\n\n\n Names: Ambrosius (Latin), Ἀμβρόσιος/Ambrosios (Greek)",
  tags: ["bishop", "doctor of the church", "theologian"]
}, {
  name: "St. Francis Xavier",
  birthYear: "1506",
  deathYear: "1552",
  description: "Jesuit missionary",
  longDescription: "A close companion of St. Ignatius of Loyola, St. Francis Xavier was a missionary to Asia, particularly India, Japan, and other parts of the Far East. Known for his zeal, he is credited with thousands of conversions and is regarded as one of the Church's greatest missionaries.\n\n\n\n Names: Francisco Javier (Spanish), François Xavier (French), Francisco de Jasso y Azpilicueta (full birth name)",
  tags: ["missionary", "preacher", "confessor"]
}, {
  name: "St. Athanasius",
  birthYear: "0296",
  deathYear: "0373",
  description: "Church Father, defender of the Trinity",
  longDescription: "St. Athanasius was an Egyptian bishop and theologian who staunchly defended the doctrine of the Trinity against Arianism. His writings, especially 'On the Incarnation,' laid foundational theological groundwork for the Church. He is celebrated as a champion of orthodoxy.\n\n Names: Ἀθανάσιος/Athanasios (Greek), Athanasius Alexandrinus (Latin)",
  tags: ["bishop", "doctor of the church", "theologian", "confessor"]
}, {
  name: "St. Basil the Great",
  birthYear: "0330",
  deathYear: "0379",
  description: "Father of Eastern monasticism",
  longDescription: "St. Basil the Great was a Cappadocian bishop known for his monastic reforms, charitable works, and defense of Nicene Christianity. His 'Rule' became the foundation of Eastern monasticism, and his theological writings greatly influenced the development of Christian doctrine.\n\n Names: Βασίλειος ὁ Μέγας/Basileios ho Megas (Greek), Basilius Magnus (Latin)",
  tags: ["bishop", "doctor of the church", "monastic founder", "theologian"]
}, {
  name: "St. John Chrysostom",
  birthYear: "0347",
  deathYear: "0407",
  description: "Early Church Father",
  longDescription: "St. John Chrysostom, renowned for his oratory skills, earned the title 'Golden Mouth.' His homilies and writings on the Bible offered deep spiritual insights, and he advocated for social justice and the reform of clergy. As Archbishop of Constantinople, he faced persecution but remained steadfast in his teachings.\n\n Names: Ἰωάννης ὁ Χρυσόστομος/Ioannes ho Chrysostomos (Greek - 'Golden Mouth'), Johannes Chrysostomus (Latin)",
  tags: ["bishop", "doctor of the church", "preacher", "theologian"]
}, {
  name: "St. Leo the Great",
  birthYear: "0400",
  deathYear: "0461",
  description: "Pope and Doctor of the Church",
  longDescription: "St. Leo the Great, as Pope, defended the Church against heresies and asserted papal authority in matters of faith. His 'Tome of Leo' was pivotal at the Council of Chalcedon in affirming Christ's dual nature. He also famously met with Attila the Hun, persuading him to spare Rome.\n\n Names: Leo Magnus (Latin), Λέων ὁ Μέγας/Leon ho Megas (Greek)",
  tags: ["pope", "doctor of the church", "theologian"]
}, {
  name: "St. Martin of Tours",
  birthYear: "0316",
  deathYear: "0397",
  description: "Bishop and patron of soldiers",
  longDescription: "St. Martin of Tours, a former Roman soldier turned Christian, became the Bishop of Tours. Known for his humility and charity, he famously shared his cloak with a beggar. He is one of the first non-martyr saints and the patron saint of soldiers and France.\n\n Names: Martinus Turonensis (Latin), Martin de Tours (French)",
  tags: ["bishop", "confessor"]
}, {
  name: "St. Anthony of Padua",
  birthYear: "1195",
  deathYear: "1231",
  description: "Doctor of the Church",
  longDescription: "St. Anthony of Padua was a Franciscan friar and a renowned preacher known for his deep theological insights and miracles. Revered for his powerful intercessions, he became known as the patron saint of lost items. His profound love for the poor and eloquent sermons made him a beloved saint.\n\n Names: António de Pádua (Portuguese), Antonio da Padova (Italian), Antonius Patavinus (Latin)",
  tags: ["doctor of the church", "preacher", "theologian"]
}, {
  name: "St. Bonaventure",
  birthYear: "1217",
  deathYear: "1274",
  description: "Franciscan theologian",
  longDescription: "St. Bonaventure, a prominent theologian and Franciscan leader, wrote extensively on the relationship between faith and reason. Known as the 'Seraphic Doctor,' his works harmonized Franciscan spirituality with scholastic theology, and he contributed greatly to the Franciscan order.\n\n Names: Giovanni di Fidanza (Italian birth name), Bonaventura da Bagnoregio (Italian)",
  tags: ["doctor of the church", "theologian", "philosopher"]
}, {
  name: "St. Albert the Great",
  birthYear: "1206",
  deathYear: "1280",
  description: "Philosopher and scientist",
  longDescription: "St. Albert the Great was a Dominican scholar and teacher of St. Thomas Aquinas. Known for his vast knowledge of natural sciences and philosophy, he was called the 'Universal Doctor.' He bridged faith and reason, making significant contributions to the development of Western thought.\n\n Names: Albertus Magnus (Latin), Albert von Bollstädt (German)",
  tags: ["doctor of the church", "philosopher", "scholar", "theologian"]
}, {
  name: "St. Therese of Lisieux",
  birthYear: "1873",
  deathYear: "1897",
  description: "The Little Flower",
  longDescription: "St. Therese of Lisieux, a Carmelite nun, is known for her 'little way' of spiritual childhood, emphasizing simplicity and trust in God. Her autobiography, 'Story of a Soul,' inspired millions. Canonized as the 'Little Flower,' she is a beloved saint and patroness of missions.\n\n Names: Marie-Françoise-Thérèse Martin (French birth name), Thérèse de l'Enfant-Jésus (French religious name)",
  tags: ["doctor of the church", "mystic", "contemplative", "virgin"]
}, {
  name: "St. Joan of Arc",
  birthYear: "1412",
  deathYear: "1431",
  description: "French martyr and military leader",
  longDescription: "St. Joan of Arc, a young peasant girl, led the French army to victory during the Hundred Years' War. She claimed to hear voices of saints guiding her, ultimately leading to her capture and execution by the English. Canonized in 1920, she is celebrated as a symbol of courage and faith.\n\n Names: Jeanne d'Arc (French), Jehanne la Pucelle (French - 'Joan the Maid')",
  tags: ["martyr", "visionary", "virgin"]
}, {
  name: "St. Bernadette Soubirous",
  birthYear: "1844",
  deathYear: "1879",
  description: "Lourdes visionary",
  longDescription: "St. Bernadette, a French peasant girl, reported visions of the Virgin Mary in Lourdes, France, where a spring with healing waters appeared. Her humility and simplicity captured the hearts of many, and Lourdes remains one of the world's most visited pilgrimage sites.\n\n Names: Marie-Bernarde Soubirous (French birth name), Sœur Marie-Bernard (French religious name)",
  tags: ["visionary", "virgin"]
},
{
  name: "St. Elizabeth Ann Seton",
  birthYear: "1774",
  deathYear: "1821",
  description: "First American-born saint",
  longDescription: "St. Elizabeth Ann Seton was a widow and convert to Catholicism who founded the Sisters of Charity, the first American religious community. She established Catholic schools and orphanages, leaving a lasting legacy on Catholic education in the United States.\n\n Names: Elizabeth Ann Bayley (maiden name), Mother Seton",
  tags: ["confessor", "monastic founder", "educator"]
}, {
  name: "St. Kateri Tekakwitha",
  birthYear: "1656",
  deathYear: "1680",
  description: "First Native American saint",
  longDescription: "St. Kateri Tekakwitha, a Mohawk-Algonquin woman, converted to Christianity despite opposition. Known for her deep faith and purity, she led a life of devotion. Canonized in 2012, she is a symbol of resilience and spirituality among Indigenous Catholics.\n\n Names: Tekakwitha (Mohawk - 'She who bumps into things'), Catherine Tekakwitha (baptismal name)",
  tags: ["virgin", "confessor"]
}, {
  name: "St. Faustina Kowalska",
  birthYear: "1905",
  deathYear: "1938",
  description: "Divine Mercy visionary",
  longDescription: "St. Faustina Kowalska, a Polish nun, received visions of Jesus, who revealed to her the message of Divine Mercy. Her diary details these revelations and led to the establishment of Divine Mercy Sunday. She is known as the 'Apostle of Divine Mercy.'\n\n Names: Helena Kowalska (Polish birth name), Siostra Faustyna (Polish religious name)",
  tags: ["mystic", "visionary", "virgin"]
}, {
  name: "St. Maximilian Kolbe",
  birthYear: "1894",
  deathYear: "1941",
  description: "Martyr of Auschwitz",
  longDescription: "St. Maximilian Kolbe, a Polish Franciscan priest, offered his life in place of a fellow prisoner at Auschwitz. Known for his devotion to Mary, he is revered as a martyr of charity and an exemplar of self-sacrifice and faith in the face of evil.\n\n Names: Rajmund Kolbe (Polish birth name), Maksymilian Maria Kolbe (Polish religious name)",
  tags: ["martyr", "confessor"]
}, {
  name: "St. Teresa of Calcutta",
  birthYear: "1910",
  deathYear: "1997",
  description: "Founder of the Missionaries of Charity",
  longDescription: "St. Teresa of Calcutta, also known as Mother Teresa, dedicated her life to serving the poorest of the poor. Founding the Missionaries of Charity, she ministered to the sick, dying, and abandoned, becoming a global symbol of compassion and love.\n\n Names: Anjezë Gonxhe Bojaxhiu (Albanian birth name), Mother Teresa",
  tags: ["missionary", "monastic founder", "virgin"]
}, {
  name: "St. John Paul II",
  birthYear: "1920",
  deathYear: "2005",
  description: "Pope",
  longDescription: "St. John Paul II, born Karol Józef Wojtyła, was the first Polish Pope and one of the most influential figures of the 20th century. Known for his extensive travels, charismatic personality, and role in ending communism in Eastern Europe, he survived an assassination attempt in 1981. His 27-year papacy emphasized human dignity, religious freedom, and dialogue between faiths. He was canonized in 2014 alongside Pope John XXIII.\n\n Names: Karol Józef Wojtyła (Polish birth name), Jan Paweł II (Polish papal name)",
  tags: ["pope", "confessor", "theologian"]
}, {
  name: "St. Padre Pio",
  birthYear: "1887",
  deathYear: "1968",
  description: "A Capuchin friar known for his piety, charity, and bearing the stigmata, Padre Pio dedicated his life to prayer, confession, and spiritual guidance. He was known for his ability to read hearts and for miraculous healings, attracting followers worldwide.",
  longDescription: "St. Padre Pio, born Francesco Forgione, was a Capuchin friar who received the stigmata (wounds of Christ) which remained visible on his body for 50 years. Known for his extraordinary spiritual gifts including bilocation, prophecy, and miraculous healings, he spent countless hours in the confessional providing spiritual guidance. He founded the Casa Sollievo della Sofferenza (House for the Relief of Suffering), a hospital that continues his mission of charity. His deep devotion and mystical experiences attracted pilgrims from around the world.\n\n Names: Francesco Forgione (Italian birth name), Pio da Pietrelcina (Italian religious name)",
  tags: ["mystic", "confessor", "visionary"]
}, {
  name: "St. Francis de Sales",
  birthYear: "1567",
  deathYear: "1622",
  description: " Doctor of the Church",
  longDescription: "St. Francis de Sales was a French Catholic bishop and Doctor of the Church known for his gentle approach to the religious divisions of his time. He developed a method of teaching based on kindness and understanding rather than harsh discipline. His works 'Introduction to the Devout Life' and 'Treatise on the Love of God' became spiritual classics. He is the patron saint of writers and journalists, and co-founded the Visitation Sisters with St. Jane Frances de Chantal.\n\n Names: François de Sales (French), Franciscus Salesius (Latin)",
  tags: ["bishop", "doctor of the church", "theologian"]
}, {
  name: "St. Louis de Montfort",
  birthYear: "1673",
  deathYear: "1716",
  description: " Marian theologian",
  longDescription: "St. Louis de Montfort was a French Catholic priest and Confessor known for his passionate devotion to the Virgin Mary. He wrote 'True Devotion to Mary,' which profoundly influenced Marian spirituality and was particularly cherished by future saints like St. John Paul II. He founded the Montfort Missionaries and the Daughters of Wisdom, and is known for his total consecration to Jesus through Mary. His approach emphasized complete surrender to God through Mary's intercession.\n\n Names: Louis-Marie Grignion de Montfort (French full name), Saint Louis-Marie (French)",
  tags: ["confessor", "theologian", "monastic founder", "preacher"]
}, {
  name: "St. Alphonsus Liguori",
  birthYear: "1696",
  deathYear: "1787",
  description: " Founder of the Redemptorists",
  longDescription: "St. Alphonsus Liguori was an Italian Catholic bishop, spiritual writer, composer, musician, artist, poet, lawyer, scholastic philosopher, and theologian. He founded the Congregation of the Most Holy Redeemer (Redemptorists) to work among the poor and most abandoned. A Doctor of the Church, he wrote numerous theological and devotional works, including 'The Glories of Mary' and works on moral theology. He is the patron saint of confessors and moral theologians.\n\n Names: Alfonso Maria de' Liguori (Italian), Alphonsus Maria de Ligorio (Latin)",
  tags: ["bishop", "doctor of the church", "theologian", "monastic founder"]
}, {
  name: "St. Vincent de Paul",
  birthYear: "1581",
  deathYear: "1660",
  description: " Patron of charitable societies",
  longDescription: "St. Vincent de Paul was a French Catholic priest who dedicated himself to serving the poor and is known for his compassion, humility, and generosity. He founded the Lazarists (Congregation of the Mission) and co-founded the Daughters of Charity with St. Louise de Marillac. He organized hospitals, orphanages, and seminaries, and worked tirelessly to relieve suffering during the wars and famines of his time. He is the patron saint of charitable societies and volunteers.\n\n Names: Vincent Depaul (French birth name), Vincentius a Paulo (Latin)",
  tags: ["confessor", "monastic founder"]
}, {
  name: "St. John Bosco",
  birthYear: "1815",
  deathYear: "1888",
  description: " Founder of the Salesians",
  longDescription: "St. John Bosco, known as Don Bosco, was an Italian Catholic priest who devoted his life to the education and care of street children and the poor. He developed the 'Preventive System' of education based on reason, religion, and kindness rather than punishment. He founded the Salesians of Don Bosco and the Daughters of Mary Help of Christians. His work in Turin transformed the lives of thousands of young people, and his educational methods continue to influence Catholic education worldwide.\n\n Names: Giovanni Melchiorre Bosco (Italian), Don Bosco (Italian title)",
  tags: ["confessor", "monastic founder"]
}, {
  name: "St. Philip Neri",
  birthYear: "1515",
  deathYear: "1595",
  description: " Founder of the Oratory",
  longDescription: "St. Philip Neri, known as the 'Apostle of Rome,' was an Italian priest who ministered to street children, the poor, and prostitutes in Rome. He founded the Congregation of the Oratory, a community of secular priests. Known for his joyful spirit, sense of humor, and humility, he was called 'the saint of joy.' He had mystical experiences and was known for his ability to read hearts. His approach emphasized that serving God should be done with cheerfulness and love.\n\n Names: Filippo Neri (Italian), Philippus Nerius (Latin)",
  tags: ["confessor", "monastic founder", "mystic"]
}, {
  name: "St. Benedict Joseph Labre",
  birthYear: "1748",
  deathYear: "1783",
  description: " Patron saint of homeless people",
  longDescription: "St. Benedict Joseph Labre was a French Catholic mendicant who is venerated as the patron saint of the homeless, mentally ill, and outcasts. After unsuccessful attempts to join various religious orders, he chose a life of pilgrimage and poverty, traveling on foot to major shrines across Europe. He lived in extreme poverty, often sleeping in ruins and begging for food. Despite his ragged appearance, he was known for his deep prayer life and charitable spirit toward other poor people.\n\n Names: Benoît-Joseph Labre (French), Benedictus Josephus Labre (Latin)",
  tags: ["confessor", "contemplative"]
}, {
  name: "St. Francis Borgia",
  birthYear: "1510",
  deathYear: "1572",
  description: " Jesuit leader",
  longDescription: "St. Francis Borgia was a Spanish nobleman who renounced his titles and wealth to become a Jesuit priest. As the third Superior General of the Society of Jesus, he helped establish the Jesuits as a major force in the Counter-Reformation. He founded numerous colleges and seminaries, and his leadership helped the Jesuit order expand throughout Europe and the missions. Despite his high birth and former wealth, he embraced a life of humility and service to God.\n\n Names: Francisco de Borja y Aragón (Spanish), Franciscus Borgia (Latin)",
  tags: ["confessor", "monastic founder"]
}, {
  name: "St. Charles Borromeo",
  birthYear: "1538",
  deathYear: "1584",
  description: " Archbishop of Milan",
  longDescription: "St. Charles Borromeo was an Italian cardinal and Archbishop of Milan who played a leading role in the Counter-Reformation. He implemented the reforms of the Council of Trent, establishing seminaries for the proper training of priests and founding schools for the education of children. During the plague of 1576 in Milan, he ministered personally to the sick and dying. His reforms and pastoral care became a model for bishops throughout the Catholic Church.\n\n Names: Carlo Borromeo (Italian), Carolus Borromeus (Latin)",
  tags: ["bishop", "reformer", "confessor"]
}, {
  name: "St. Thomas More",
  birthYear: "1478",
  deathYear: "1535",
  description: " Martyr under Henry VIII",
  longDescription: "St. Thomas More was an English lawyer, social philosopher, author, statesman, and noted Renaissance humanist. He served as Lord High Chancellor of England under King Henry VIII but was executed for refusing to acknowledge the king as head of the Church of England. Author of 'Utopia,' he was a man of principle who chose death rather than compromise his Catholic faith. He is the patron saint of lawyers and statesmen.\n\n Names: Thomas Morus (Latin), Sir Thomas More (English title)",
  tags: ["martyr", "philosopher", "scholar"]
}, {
  name: "St. John Fisher",
  birthYear: "1469",
  deathYear: "1535",
  description: " Martyr under Henry VIII",
  longDescription: "St. John Fisher was an English Catholic bishop, theologian, and martyr. As Bishop of Rochester, he was known for his learning and was the only bishop in England to oppose King Henry VIII's divorce from Catherine of Aragon. He refused to accept Henry as head of the Church of England and was executed alongside St. Thomas More. He was a patron of Renaissance learning and helped bring humanist scholarship to England.\n\n Names: Johannes Fischerus (Latin), John Fisher of Rochester (English)",
  tags: ["bishop", "martyr", "theologian", "scholar"]
}, {
  name: "St. Rose of Lima",
  birthYear: "1586",
  deathYear: "1617",
  description: " First saint from the Americas",
  longDescription: "St. Rose of Lima was a Peruvian laywoman who became the first Catholic saint born in the Americas. Known for her extreme penances and mystical experiences, she lived as a tertiary of the Dominican Order while caring for the poor and sick in her home. She experienced visions and ecstasies, and her life of prayer and sacrifice made her a beloved figure in Lima. She is the patron saint of Latin America and the Philippines.\n\n Names: Isabel Flores de Oliva (Spanish birth name), Rosa de Santa María (Spanish religious name)",
  tags: ["mystic", "virgin", "visionary"]
}, {
  name: "St. Damien of Molokai",
  birthYear: "1840",
  deathYear: "1889",
  description: " Apostle to lepers",
  longDescription: "St. Damien of Molokai was a Belgian Catholic priest who ministered to people with leprosy who had been placed under a government-sanctioned medical quarantine on the island of Molokai in Hawaii. He eventually contracted leprosy himself and died among those he served. His work brought international attention to the plight of those suffering from Hansen's disease and helped improve conditions in leper colonies worldwide. He is a symbol of sacrificial love and service to the marginalized.\n\n Names: Jozef De Veuster (Dutch birth name), Father Damien (English)",
  tags: ["missionary", "confessor", "martyr"]
},
{
  name: "St. Juan Diego",
  birthYear: "1474",
  deathYear: "1548",
  description: " Visionary of Our Lady of Guadalupe",
  longDescription: "St. Juan Diego was an indigenous Mexican who experienced apparitions of the Virgin Mary in 1531 on Tepeyac Hill near Mexico City. The Virgin, appearing as Our Lady of Guadalupe, left her image miraculously imprinted on his tilma (cloak), which remains preserved today. His vision led to the rapid conversion of millions of indigenous people to Christianity and established Our Lady of Guadalupe as the patroness of the Americas. He represents the beautiful synthesis of indigenous and Catholic cultures in Mexico.\n\n Names: Cuauhtlatoatzin (Nahuatl birth name - 'talking eagle'), Juan Diego Cuauhtlatoatzin (Spanish baptismal name)",
  tags: ["visionary", "confessor"]
},
{
  name: "St. Ignatius of Antioch",
  birthYear: "0035",
  deathYear: "0108",
  description: " Early martyr and Church Father",
  longDescription: "St. Ignatius of Antioch was an early Christian writer and Patriarch of Antioch. On his way to martyrdom in Rome, he wrote seven letters to various Christian communities that provide insight into the early Church's structure and beliefs. He was the first to use the term 'Catholic Church' and emphasized the importance of the Eucharist and episcopal authority. He was thrown to wild beasts in the Colosseum during the reign of Emperor Trajan.\n\n Names: Ἰγνάτιος Ἀντιοχείας/Ignatios Antiocheias (Greek), Ignatius Theophorus (Latin - 'God-bearer')",
  tags: ["bishop", "martyr", "theologian"]
}, {
  name: "St. Polycarp",
  birthYear: "0069",
  deathYear: "0155",
  description: " Bishop, early martyr, disciple of St. John",
  longDescription: "St. Polycarp was an early Christian bishop of Smyrna (modern-day Izmir, Turkey) and a direct disciple of the Apostle John. He was an important link between the apostolic age and the later Church Fathers. His martyrdom at age 86 is one of the earliest detailed accounts of Christian martyrdom outside the New Testament. He refused to renounce his faith, famously saying he had served Christ for 86 years and Christ had never wronged him, so how could he blaspheme his King and Savior.\n\n Names: Πολύκαρπος/Polykarpos (Greek), Polycarpus Smyrnensis (Latin)",
  tags: ["bishop", "martyr"]
}, {
  name: "St. Irenaeus of Lyons",
  birthYear: "0130",
  deathYear: "0202",
  description: " Early Church Father",
  longDescription: "St. Irenaeus was an early Church Father and bishop of Lyon in Gaul (modern-day France). He was a student of St. Polycarp, who had been taught by the Apostle John. His most famous work, 'Against Heresies,' was a detailed attack on Gnosticism and helped establish orthodox Christian theology. He emphasized the importance of apostolic tradition and was instrumental in developing the doctrine of recapitulation - that Christ recapitulated all stages of human life to save humanity.\n\n Names: Εἰρηναῖος/Eirenaios (Greek), Irenaeus Lugdunensis (Latin)",
  tags: ["bishop", "theologian", "doctor of the church"]
}, {
  name: "St. Justin Martyr",
  birthYear: "0100",
  deathYear: "0165",
  description: " Early Christian apologist",
  longDescription: "St. Justin Martyr was an early Christian apologist and philosopher who defended the Christian faith through reasoned arguments. Born a pagan, he converted to Christianity after studying various philosophical schools. His 'Apologies' addressed to Roman emperors defended Christians against charges of atheism and immorality, arguing that Christianity was the true philosophy. He established a Christian school in Rome and was eventually martyred for refusing to sacrifice to pagan gods. He is considered the foremost apologist of the second century.\n\n Names: Ἰουστῖνος ὁ Μάρτυς/Ioustinos ho Martys (Greek), Justinus Martyr (Latin)",
  tags: ["martyr", "philosopher", "theologian"]
},
{
  name: "St. Anselm of Canterbury",
  birthYear: "1033",
  deathYear: "1109",
  description: "Doctor of the Church, philosopher, and theologian",
  longDescription: "St. Anselm of Canterbury was an Italian Benedictine monk, philosopher, and theologian who served as Archbishop of Canterbury. Known as the 'Father of Scholasticism,' he developed the ontological argument for God's existence and the satisfaction theory of atonement. His famous motto 'faith seeking understanding' (fides quaerens intellectum) summarized his approach to theology. His works 'Proslogion' and 'Cur Deus Homo' (Why God Became Man) were groundbreaking contributions to medieval philosophy and theology.\n\n Names: Anselmus Cantuariensis (Latin), Anselme de Cantorbéry (French)",
  tags: ["bishop", "doctor of the church", "philosopher", "theologian"]
},
{
  name: "St. Boniface",
  birthYear: "0675",
  deathYear: "0754",
  description: "Apostle of Germany",
  longDescription: "St. Boniface, born Wynfrith in England, was a Benedictine monk who became known as the 'Apostle of the Germans.' He evangelized the Germanic tribes, established churches and monasteries, and reformed the Frankish church. He famously cut down the sacred oak of Thor at Geismar to demonstrate the powerlessness of pagan gods. As Archbishop of Mainz, he crowned Pepin the Short as King of the Franks. He was martyred while on a mission to the Frisians and is considered the patron saint of Germany.\n\n Names: Wynfrith (Anglo-Saxon birth name), Bonifatius (Latin missionary name)",
  tags: ["bishop", "missionary", "martyr"]
},
{
  name: "St. Gregory of Nazianzus",
  birthYear: "0329",
  deathYear: "0390",
  description: "Doctor of the Church, theologian",
  longDescription: "St. Gregory of Nazianzus, known as 'Gregory the Theologian,' was one of the Cappadocian Fathers and a Doctor of the Church. He was renowned for his eloquent orations defending the divinity of Christ and the Holy Spirit against Arianism. As Patriarch of Constantinople, he presided over the First Council of Constantinople in 381. His theological poetry and orations, particularly his Five Theological Orations, earned him recognition as one of the greatest Christian orators and theologians.\n\n Names: Γρηγόριος ὁ Θεολόγος/Gregorios ho Theologos (Greek - 'the Theologian'), Gregorius Nazianzenus (Latin)",
  tags: ["bishop", "doctor of the church", "theologian", "poet"]
},
{
  name: "St. Cyril of Alexandria",
  birthYear: "0376",
  deathYear: "0444",
  description: "Patriarch of Alexandria, Doctor of the Church",
  longDescription: "St. Cyril of Alexandria was the Patriarch of Alexandria and a prominent theologian in the Christological controversies of the 5th century. He was the chief opponent of Nestorius and played a key role at the Council of Ephesus (431), which affirmed Mary as Theotokos (God-bearer) and condemned Nestorianism. His extensive biblical commentaries and theological works defending the unity of Christ's divine and human natures earned him recognition as a Doctor of the Church. He is particularly revered in Eastern Christianity.\n\n Names: Κύριλλος Ἀλεξανδρείας/Kyrillos Alexandreias (Greek), Cyrillus Alexandrinus (Latin)",
  tags: ["bishop", "doctor of the church", "theologian"]
},
{
  name: "St. Cyril of Jerusalem",
  birthYear: "0313",
  deathYear: "0386",
  description: "Bishop of Jerusalem, Doctor of the Church",
  longDescription: "St. Cyril of Jerusalem was a theologian and bishop of Jerusalem during the 4th century. He is best known for his 'Catechetical Lectures,' delivered to catechumens preparing for baptism, which provide valuable insight into early Christian liturgy and doctrine. These lectures are among the most important sources for understanding the practices of the early Church, particularly the sacraments of initiation. He defended orthodox teaching against Arianism and was eventually recognized as a Doctor of the Church.\n\n Names: Κύριλλος Ἱεροσολύμων/Kyrillos Hierosolymon (Greek), Cyrillus Hierosolymitanus (Latin)",
  tags: ["bishop", "doctor of the church", "theologian"]
},
{
  name: "St. Ephrem the Syrian",
  birthYear: "0306",
  deathYear: "0373",
  description: "Doctor of the Church, theologian and hymnographer",
  longDescription: "St. Ephrem the Syrian was a Syriac deacon and prolific hymnographer who is venerated by Christians throughout the world. Known as the 'Harp of the Holy Spirit,' he composed hundreds of hymns and biblical commentaries in Syriac. His poetic theology deeply influenced Eastern Christianity, and his hymns are still sung in Syriac churches today. He defended orthodox doctrine against various heresies and was declared a Doctor of the Church by Pope Benedict XV in 1920.\n\n Names: ܐܦܪܝܡ ܣܘܪܝܝܐ/Afrem Suryaya (Syriac), Ephraem Syrus (Latin)",
  tags: ["doctor of the church", "theologian", "poet"]
},
{
  name: "St. Hilary of Poitiers",
  birthYear: "0310",
  deathYear: "0367",
  description: "Doctor of the Church, defender of the Trinity",
  longDescription: "St. Hilary of Poitiers was a French bishop and theologian who was one of the leading defenders of Trinitarian orthodoxy against Arianism in the Western Church. Often called the 'Athanasius of the West,' he was exiled by the Arian Emperor Constantius II but continued his theological work. His major work 'On the Trinity' (De Trinitate) is a masterpiece of Latin theology. He also wrote biblical commentaries and introduced Eastern theological concepts to the Western Church.\n\n Names: Hilarius Pictaviensis (Latin), Hilaire de Poitiers (French)",
  tags: ["bishop", "doctor of the church", "theologian", "confessor"]
},
{
  name: "St. Isidore of Seville",
  birthYear: "0560",
  deathYear: "0636",
  description: "Doctor of the Church, encyclopedist",
  longDescription: "St. Isidore of Seville was a Spanish scholar, theologian, and Archbishop of Seville who compiled the first Christian encyclopedia, 'Etymologiae' (Etymologies). This 20-volume work preserved much classical learning for medieval Europe and influenced education for centuries. He presided over several councils that helped shape the Spanish Church and was instrumental in the conversion of the Visigoths from Arianism to Catholicism. He is considered the patron saint of the internet and computer users.\n\n Names: Isidorus Hispalensis (Latin), Isidoro de Sevilla (Spanish)",
  tags: ["bishop", "doctor of the church", "scholar", "theologian"]
},
{
  name: "St. John Damascene",
  birthYear: "0675",
  deathYear: "0749",
  description: "Doctor of the Church, theologian and hymnographer",
  longDescription: "St. John Damascene was a Syrian Christian monk and priest who became one of the last great theologians of the early Eastern Church. His most famous work, 'The Fount of Knowledge,' synthesized Greek patristic theology and became a standard textbook in Eastern theology. He was a vigorous defender of icon veneration during the Iconoclastic period, arguing that icons are windows to the divine. He also composed many hymns still used in Eastern liturgy and is considered the last of the great Eastern Church Fathers.\n\n Names: Ἰωάννης ὁ Δαμασκηνός/Ioannes ho Damaskenos (Greek), يوحنا الدمشقي/Yuhanna al-Dimashqi (Arabic)",
  tags: ["doctor of the church", "theologian", "poet"]
},
{
  name: "St. Lawrence of Rome",
  birthYear: "0225",
  deathYear: "0258",
  description: "Martyr and deacon of the early Church",
  longDescription: "St. Lawrence was a Roman deacon under Pope Sixtus II who was martyred during the persecution of Emperor Valerian. According to tradition, when asked to hand over the Church's treasures, he presented the poor and sick people he had been caring for, saying 'These are the treasures of the Church.' He was reportedly roasted alive on a gridiron, and legend says he joked with his executioners about being 'done' on one side. He is the patron saint of cooks, librarians, and comedians.\n\n Names: Laurentius (Latin), Lorenzo (Italian), Laurent (French)",
  tags: ["martyr", "deacon", "charity worker"]
},
{
  name: "St. Cecilia",
  birthYear: "0200",
  deathYear: "0230",
  description: "Patron saint of music and musicians",
  longDescription: "St. Cecilia was an early Christian martyr and noblewoman in Rome who is venerated as the patron saint of musicians. According to tradition, she heard heavenly music during her wedding ceremony and secretly wore a hair shirt under her wedding dress while vowing to remain a virgin. She converted her husband and his brother to Christianity before all three were martyred. Legend says she survived three attempts at beheading and sang to God as she lay dying. She is often depicted with musical instruments or angels.\n\n Names: Caecilia (Latin), Cecilia Romana (Latin - 'Cecilia of Rome')",
  tags: ["martyr", "virgin"]
},
{
  name: "St. Agnes of Rome",
  birthYear: "0291",
  deathYear: "0304",
  description: "Virgin and martyr",
  longDescription: "St. Agnes was a young Roman Christian who was martyred at the age of 12 or 13 during the reign of Emperor Diocletian. She refused marriage proposals from young Roman men, declaring that she was betrothed to Christ. When she would not renounce her faith, she was condemned to death. Various attempts to execute her failed miraculously, and she was finally beheaded. She is venerated as the patron saint of young girls, chastity, and rape victims. The Feast of St. Agnes includes the blessing of lambs whose wool is used to make the palliums worn by archbishops.\n\n Names: Agnes (Latin), Ἁγνή/Hagne (Greek - meaning 'pure')",
  tags: ["martyr", "virgin"]
},
{
  name: "St. Perpetua",
  birthYear: "0182",
  deathYear: "0203",
  description: "Early Christian martyr",
  longDescription: "St. Perpetua was a noblewoman in Carthage, North Africa, who, along with her slave St. Felicity, was martyred for her faith. Her prison diary, which describes her steadfast faith and courage, is one of the earliest Christian writings by a woman and provides a unique insight into early Christian life and martyrdom.\n\n Names: Vibia Perpetua (Latin full name), Perpetua Carthaginensis (Latin)",
  tags: ["martyr"]
},
{
  name: "St. Felicity",
  birthYear: "0180",
  deathYear: "0203",
  description: "Early Christian martyr, companion of St. Perpetua",
  longDescription: "St. Felicity was a young slave and a Christian who was imprisoned with St. Perpetua. Despite being pregnant, she remained committed to her faith and faced martyrdom alongside Perpetua. Their story of shared faith and courage inspired generations of Christians in North Africa and beyond.\n\n Names: Felicitas (Latin), Felicity of Carthage (English)",
  tags: ["martyr", "virgin"]
},
{
  name: "St. Ignatius of Loyola",
  birthYear: "1491",
  deathYear: "1556",
  description: "Founder of the Society of Jesus (Jesuits)",
  longDescription: "St. Ignatius of Loyola was a Spanish soldier who, after a severe injury, underwent a profound religious conversion. He founded the Society of Jesus, also known as the Jesuits, emphasizing education, missionary work, and spiritual exercises, which have had a lasting impact on the Catholic Church worldwide.\n\n Names: Íñigo López de Loyola (Basque birth name), Ignacio de Loyola (Spanish)",
  tags: ["confessor", "monastic founder"]
},
{
  name: "St. John Vianney",
  birthYear: "1786",
  deathYear: "1859",
  description: "Patron saint of parish priests",
  longDescription: "Known as the 'Curé of Ars,' St. John Vianney was a French parish priest renowned for his dedication to the sacrament of confession and pastoral care. Despite early struggles in seminary, he became a model of priestly life and is revered for his holiness and humble service.\n\n Names: Jean-Baptiste-Marie Vianney (French full name), Curé d'Ars (French title)",
  tags: ["confessor"]
},
{
  name: "St. Vincent Ferrer",
  birthYear: "1350",
  deathYear: "1419",
  description: "Dominican preacher and missionary",
  longDescription: "St. Vincent Ferrer was a Spanish Dominican friar known for his charismatic preaching across Europe. He promoted repentance and conversion, playing a crucial role in the religious renewal of his time. Vincent is often depicted with wings, symbolizing his travels as a missionary.\n\n Names: Vicent Ferrer (Valencian), Vicente Ferrer (Spanish)",
  tags: ["preacher", "missionary", "confessor"]
},
{
  name: "St. Nicholas of Myra",
  birthYear: "0270",
  deathYear: "0343",
  description: "Bishop, patron of children and sailors",
  longDescription: "St. Nicholas was a Greek bishop known for his charity and generosity. Many stories recount his anonymous gifts to the needy, leading to his association with Santa Claus in popular culture. He is revered as a protector of children and sailors and a model of Christian charity.\n\n Names: Ἅγιος Νικόλαος/Hagios Nikolaos (Greek), Nicolaus Myrensis (Latin)",
  tags: ["bishop", "confessor"]
},
{
  name: "St. Gregory of Nyssa",
  birthYear: "0335",
  deathYear: "0395",
  description: "Early Church Father, theologian",
  longDescription: "St. Gregory of Nyssa was a philosopher and theologian whose works profoundly influenced Christian thought. A key figure in the development of Trinitarian theology, he was instrumental in defending the faith against Arianism and contributed greatly to mystical theology and spiritual writings.\n\n Names: Γρηγόριος Νύσσης/Gregorios Nysses (Greek), Gregorius Nyssenus (Latin)",
  tags: ["bishop", "doctor of the church", "theologian", "philosopher"]
},
{
  name: "St. Clare of Montefalco",
  birthYear: "1268",
  deathYear: "1308",
  description: "Abbess and mystic",
  longDescription: "St. Clare of Montefalco was an Italian abbess and mystic known for her devotion to Christ's Passion. She reported visionary experiences, including bearing the symbols of the Passion in her heart, and emphasized a life of penance and prayer within the Augustinian order.\n\n Names: Chiara da Montefalco (Italian), Clara de Montefalco (Latin)",
  tags: ["abbot", "mystic", "visionary", "virgin"]
},
{
  name: "St. Sebastian",
  birthYear: "0256",
  deathYear: "0288",
  description: "Martyr and patron of athletes",
  longDescription: "St. Sebastian, a Roman soldier, was known for his strength and courage in defending his faith. Martyred under Emperor Diocletian, he survived an initial execution by arrows only to be martyred again. He became a symbol of resilience and is a patron of athletes and soldiers.\n\n Names: Sebastianus (Latin), Sebastiano (Italian)",
  tags: ["martyr", "warrior"]
},
{
  name: "St. George",
  birthYear: "0275",
  deathYear: "0303",
  description: "Martyr and patron saint of England",
  longDescription: "St. George, a Roman soldier, is best known for the legendary tale of slaying a dragon to save a village, symbolizing his triumph over evil. Widely revered as a martyr, he is celebrated as a patron saint in various cultures, particularly in England, symbolizing courage and faith.\n\n Names: Γεώργιος/Georgios (Greek), Georgius (Latin)",
  tags: ["martyr", "warrior"]
},
{
  name: "St. Lucy",
  birthYear: "0283",
  deathYear: "0304",
  description: "Virgin and martyr, patroness of the blind",
  longDescription: "St. Lucy was a young Christian martyr who chose death rather than renounce her faith. Known for her piety and courage, she is often depicted holding a lamp or her eyes on a dish, symbolizing her role as the patroness of the blind and those with vision-related issues.\n\n Names: Lucia (Latin), Λουκία/Loukia (Greek)",
  tags: ["virgin", "martyr"]
},
{
  name: "St. Mary Magdalene",
  birthYear: "-000003",
  deathYear: "0063",
  description: "Disciple of Christ and witness to the Resurrection",
  longDescription: "St. Mary Magdalene is one of the most significant female figures in the New Testament, known for her deep faith in Jesus and her role as the first witness to the Resurrection. Traditionally associated with repentance, she is revered as the 'Apostle to the Apostles.'\n\n Names: Μαρία ἡ Μαγδαληνή/Maria he Magdalene (Greek), Maria Magdalena (Latin)",
  tags: ["disciple"]
},
{
  name: "St. John the Baptist",
  birthYear: "-000006",
  deathYear: "0030",
  description: "Precursor of Christ, prophet",
  longDescription: "St. John the Baptist is a major prophetic figure who prepared the way for Christ by preaching repentance and baptizing Jesus in the Jordan River. He is known for his ascetic lifestyle and fearless proclamation, ultimately being martyred by King Herod for his teachings.\n\n Names: Ἰωάννης ὁ Βαπτιστής/Ioannes ho Baptistes (Greek), יוחנן המטביל/Yochanan HaMatbil (Hebrew)",
  tags: ["prophet", "martyr", "preacher"]
},
{
  name: "St. Andrew the Apostle",
  birthYear: "0006",
  deathYear: "0060",
  description: "Apostle, patron saint of Scotland",
  longDescription: "St. Andrew, brother of St. Peter, was one of the first disciples called by Jesus. Known for his missionary zeal, he is honored as the patron saint of Scotland and is believed to have been martyred on an X-shaped cross, known today as 'St. Andrew's Cross.'\n\n Names: Ἀνδρέας/Andreas (Greek), Andreas Apostolus (Latin)",
  tags: ["apostle", "martyr", "missionary"]
},
{
  name: "St. James the Greater",
  birthYear: "0000",
  deathYear: "0044",
  description: "Apostle and martyr",
  longDescription: "St. James the Greater, brother of St. John, was one of Jesus' closest disciples. Known for his fiery zeal, he was the first apostle to be martyred. His remains are said to be in Santiago de Compostela, Spain, making it a major pilgrimage site in Christendom.\n\n Names: Ἰάκωβος/Iakobos (Greek), Jacobus Major (Latin), Santiago (Spanish)",
  tags: ["apostle", "martyr"]
},
{
  name: "St. Anthony the Great",
  birthYear: "0251",
  deathYear: "0356",
  description: "Father of monasticism",
  longDescription: "St. Anthony the Great is regarded as the founder of Christian monasticism. Renouncing his wealth, he lived a life of solitude in the Egyptian desert, where he inspired countless followers to embrace asceticism, laying the foundations for monastic communities.\n\n Names: Ἀντώνιος ὁ Μέγας/Antonios ho Megas (Greek), Antonius Abbas (Latin)",
  tags: ["monastic founder", "abbot", "contemplative"]
},
{
  name: "St. Teresa Benedicta of the Cross (Edith Stein)",
  birthYear: "1891",
  deathYear: "1942",
  description: "Jewish convert, martyr",
  longDescription: "St. Teresa Benedicta of the Cross, born Edith Stein, was a German-Jewish philosopher who converted to Christianity and joined the Carmelite order. She was martyred in Auschwitz during the Holocaust, and her life exemplifies faith and interfaith dialogue.",
  tags: ["martyr", "philosopher", "virgin"]
},
{
  name: "St. Elizabeth of Hungary",
  birthYear: "1207",
  deathYear: "1231",
  description: "Princess, patron of the poor",
  longDescription: "St. Elizabeth of Hungary was a princess known for her deep compassion and commitment to the poor. After her husband's death, she devoted herself to charity, founding hospitals and caring for the sick. She is celebrated as a model of Christian charity and selflessness.\n\n Names: Erzsébet (Hungarian), Elisabeth von Thüringen (German)",
  tags: ["confessor", "charity worker"]
},
{
  name: "St. Louis of France",
  birthYear: "1214",
  deathYear: "1270",
  description: "King of France, patron of the Third Order of St. Francis",
  longDescription: "St. Louis IX was a devout King of France known for his just rule and dedication to faith. He led two Crusades and worked tirelessly to support the Church and protect his people. He is honored as a patron of the Third Order of St. Francis and a model of Christian leadership.\n\n Names: Louis IX (French), Ludovicus (Latin), Saint-Louis (French)",
  tags: ["confessor", "leader"]
},
{
  name: "St. Zita of Lucca",
  birthYear: "1212",
  deathYear: "1272",
  description: "Patroness of domestic workers",
  longDescription: "St. Zita was a humble servant in Lucca, Italy, who was known for her devout life and tireless service to others. Her kindness and generosity eventually led her to be revered as the patroness of domestic workers, embodying the Christian values of humility and service.\n\n Names: Zita da Lucca (Italian), Sita (diminutive)",
  tags: ["confessor", "virgin"]
},
{
  name: "St. Bridget of Sweden",
  birthYear: "1303",
  deathYear: "1373",
  description: "Founder of the Bridgettines, mystic",
  longDescription: "St. Bridget of Sweden was a Swedish mystic and founder of the Bridgettines (Order of the Most Holy Savior). A mother of eight children, including the future St. Catherine of Sweden, she experienced numerous mystical visions throughout her life. After her husband's death, she founded the Bridgettine Order and made pilgrimages to Rome and the Holy Land. Her 'Revelations' describing her visions became widely read throughout medieval Europe. She was instrumental in persuading the Pope to return from Avignon to Rome.\n\n Names: Birgitta Birgersdotter (Swedish), Birgitta av Vadstena (Swedish)",
  tags: ["mystic", "monastic founder", "visionary"]
},
{
  name: "St. Margaret of Scotland",
  birthYear: "1045",
  deathYear: "1093",
  description: "Queen of Scotland, patroness of widows",
  longDescription: "St. Margaret of Scotland was an English princess who became Queen of Scotland through marriage to King Malcolm III. Known for her piety, charity, and reforms of Scottish church practices, she brought English and European religious customs to Scotland. She founded churches, cared for orphans and the poor, and was instrumental in strengthening Scottish ties with the broader Christian world. She is the patroness of Scotland and widows, and her influence helped civilize the rough Scottish court.\n\n Names: Margaret Ætheling (Anglo-Saxon), Margarita Scotia (Latin)",
  tags: ["confessor", "reformer"]
},
{
  name: "St. Gertrude the Great",
  birthYear: "1256",
  deathYear: "1302",
  description: "Mystic and theologian",
  longDescription: "St. Gertrude the Great was a German Benedictine nun, mystic, and theologian who experienced profound visions of Christ, particularly devotions to the Sacred Heart. Though she never held high office, she was called 'the Great' because of her exceptional holiness and mystical gifts. Her writings, including 'The Herald of Divine Love,' detail her spiritual experiences and contributed significantly to medieval mysticism. She is one of the few women saints to be called 'the Great' and is considered a precursor to modern devotion to the Sacred Heart of Jesus.\n\n Names: Gertrud von Helfta (German), Gertruda Magna (Latin)",
  tags: ["mystic", "theologian", "visionary", "virgin"]
},
{
  name: "St. Charles Lwanga",
  birthYear: "1860",
  deathYear: "1886",
  description: "Ugandan martyr, patron of African youth",
  longDescription: "St. Charles Lwanga was a Ugandan catechist and martyr who was the leader of a group of 22 Catholic converts killed by King Mwanga II of Buganda. As chief of the royal pages, he instructed many young men in the Christian faith despite the king's opposition to Christianity. When the king ordered the execution of all Christians at court, Charles and his companions chose death rather than renounce their faith. He is the patron saint of African youth and catechists, and his martyrdom helped establish Christianity firmly in East Africa.\n\n Names: Kaloli Lwanga (Luganda birth name), Charles Lwanga (baptismal name)",
  tags: ["martyr", "missionary"]
},
{
  name: "Adam",
  birthYear: '-004000',
  deathYear: '-003070',
  description: "First human, according to the Bible",
  longDescription: "First human, according to the Bible\n\n Names: אָדָם/Adam (Hebrew - 'man, mankind'), Ἀδάμ/Adam (Greek)",
  tags: ["patriarch"]
},
{
  name: "Eve",
  birthYear: '-004000',
  deathYear: '-003070',
  description: "First woman, according to the Bible",
  longDescription: "First woman, according to the Bible\n\n Names: חַוָּה/Chavah (Hebrew - 'living'), Εὕα/Heua (Greek)",
  tags: ["patriarch"]
},
{
  name: "Noah",
  birthYear: '-002940',
  deathYear: '-001995',
  description: "Built the Ark, survived the Flood",
  longDescription: "Built the Ark, survived the Flood\n\n Names: נֹחַ/Noach (Hebrew - 'rest, comfort'), Νῶε/Noe (Greek)",
  tags: ["patriarch", "prophet"]
},
{
  name: "Abraham",
  birthYear: '-002150',
  deathYear: '-002000',
  description: "Patriarch of the Israelites, father of Isaac",
  longDescription: "Patriarch of the Israelites, father of Isaac\n\n Names: אַבְרָהָם/Avraham (Hebrew - 'father of many'), Ἀβραάμ/Abraam (Greek)",
  tags: ["patriarch", "prophet"]
},
{
  name: "Sarah",
  birthYear: '-002130',
  deathYear: '-002020',
  description: "Wife of Abraham, mother of Isaac",
  longDescription: "Wife of Abraham, mother of Isaac\n\n Names: שָׂרָה/Sarah (Hebrew - 'princess'), Σάρρα/Sarra (Greek)",
  tags: ["patriarch"]
},
{
  name: "Isaac",
  birthYear: '-002040',
  deathYear: '-001822',
  description: "Son of Abraham, father of Jacob and Esau",
  longDescription: "Son of Abraham, father of Jacob and Esau\n\n Names: יִצְחָק/Yitzchak (Hebrew - 'laughter'), Ἰσαάκ/Isaak (Greek)",
  tags: ["patriarch"]
},
{
  name: "Rebekah",
  birthYear: '-002030',
  deathYear: '-001880',
  description: "Wife of Isaac, mother of Jacob and Esau",
  longDescription: "Wife of Isaac, mother of Jacob and Esau",
  tags: ["patriarch"]
},
{
  name: "Jacob",
  birthYear: '-001990',
  deathYear: '-001837',
  description: "Patriarch, also called Israel, father of the 12 tribes",
  longDescription: "Patriarch, also called Israel, father of the 12 tribes\n\n Names: יַעֲקֹב/Ya'akov (Hebrew - 'heel holder'), Ἰακώβ/Iakob (Greek)",
  tags: ["patriarch", "prophet"]
},
{
  name: "Leah",
  birthYear: '-001975',
  deathYear: '-001830',
  description: "First wife of Jacob, mother of six sons",
  longDescription: "First wife of Jacob, mother of six sons",
  tags: ["patriarch"]
},
{
  name: "Rachel",
  birthYear: '-001975',
  deathYear: '-001850',
  description: "Second wife of Jacob, mother of Joseph and Benjamin",
  longDescription: "Second wife of Jacob, mother of Joseph and Benjamin",
  tags: ["patriarch"]
},
{
  name: "Joseph",
  birthYear: '-001910',
  deathYear: '-001800',
  description: "Son of Jacob, sold into slavery, became an Egyptian ruler",
  longDescription: "Son of Jacob, sold into slavery, became an Egyptian ruler\n\n Names: יוֹסֵף/Yosef (Hebrew - 'he will add'), Ἰωσήφ/Ioseph (Greek)",
  tags: ["patriarch", "leader"]
},
{
  name: "Moses",
  birthYear: '-001391',
  deathYear: '-001271',
  description: "Led the Israelites out of Egypt, received the Ten Commandments",
  longDescription: "Led the Israelites out of Egypt, received the Ten Commandments\n\n Names: מֹשֶׁה/Moshe (Hebrew - 'drawn out'), Μωϋσῆς/Moyses (Greek)",
  tags: ["prophet", "leader", "patriarch"]
},
{
  name: "Aaron",
  birthYear: '-001395',
  deathYear: '-001273',
  description: "Brother of Moses, first high priest of the Israelites",
  longDescription: "Brother of Moses, first high priest of the Israelites\n\n Names: אַהֲרֹן/Aharon (Hebrew), Ἀαρών/Aaron (Greek)",
  tags: ["priest", "patriarch"]
},
{
  name: "Miriam",
  birthYear: '-001400',
  deathYear: '-001270',
  description: "Sister of Moses and Aaron, prophetess",
  longDescription: "Sister of Moses and Aaron, prophetess\n\n Names: מִרְיָם/Miryam (Hebrew), Μαριάμ/Mariam (Greek)",
  tags: ["prophet", "patriarch"]
},
{
  name: "Joshua",
  birthYear: '-001355',
  deathYear: '-001244',
  description: "Successor of Moses, led the Israelites into the Promised Land",
  longDescription: "Successor of Moses, led the Israelites into the Promised Land\n\n Names: יְהוֹשֻׁעַ/Yehoshua (Hebrew - 'YHWH is salvation'), Ἰησοῦς/Iesous (Greek)",
  tags: ["leader", "warrior"]
},
{
  name: "Samson",
  birthYear: '-001150',
  deathYear: '-001120', description: "Judge of Israel, known for his great strength",
  longDescription: "Judge of Israel, known for his great strength\n\n Names: שִׁמְשׁוֹן/Shimshon (Hebrew - 'little sun'), Σαμψών/Sampson (Greek)",
  tags: ["judge", "warrior"]
},
{
  name: "Samuel",
  birthYear: '-001110',
  deathYear: '-001010',
  description: "Prophet and last judge of Israel, anointed Saul and David",
  longDescription: "Prophet and last judge of Israel, anointed Saul and David\n\n Names: שְׁמוּאֵל/Shmuel (Hebrew - 'heard by God'), Σαμουήλ/Samouel (Greek)",
  tags: ["prophet", "judge", "leader"]
},
{
  name: "Saul",
  birthYear: '-001085',
  deathYear: '-001045',
  description: "First king of Israel, father of Jonathan and Michal",
  longDescription: "First king of Israel, father of Jonathan and Michal\n\n Names: שָׁאוּל/Sha'ul (Hebrew - 'asked for'), Σαούλ/Saoul (Greek)",
  tags: ["leader", "warrior"]
},
{
  name: "David",
  birthYear: '-001040',
  deathYear: '-000970',
  description: "Second king of Israel, slayer of Goliath, father of Solomon",
  longDescription: "Second king of Israel, slayer of Goliath, father of Solomon\n\n Names: דָּוִד/David (Hebrew - 'beloved'), Δαυίδ/Dauid (Greek)",
  tags: ["leader", "warrior", "patriarch"]
},
{
  name: "Jonathan",
  birthYear: '-001065',
  deathYear: '-001045',
  description: "Son of Saul, friend of David",
  longDescription: "Son of Saul, friend of David\n\n Names: יְהוֹנָתָן/Yehonatan (Hebrew - 'YHWH has given'), Ἰωνάθαν/Ionathan (Greek)",
  tags: ["warrior", "leader"]
},
{
  name: "Bathsheba",
  birthYear: '-001015',
  deathYear: '-000950',
  description: "Wife of David, mother of Solomon",
  longDescription: "Wife of David, mother of Solomon",
  tags: ["patriarch"]
},
{
  name: "Solomon",
  birthYear: '-001010',
  deathYear: '-000931',
  description: "King of Israel, known for wisdom, built the First Temple",
  longDescription: "King of Israel, known for wisdom, built the First Temple\n\n Names: שְׁלֹמֹה/Shlomo (Hebrew - 'peaceful'), Σολομών/Solomon (Greek)",
  tags: ["leader", "patriarch"]
},
{
  name: "Rehoboam",
  birthYear: '-000972',
  deathYear: '-000913', description: "Son of Solomon, first king of Judah",
  longDescription: "Son of Solomon, first king of Judah",
  tags: ["leader"]
},
{
  name: "Jeroboam",
  birthYear: '-000975',
  deathYear: '-000910',
  description: "First king of the northern Kingdom of Israel",
  longDescription: "First king of the northern Kingdom of Israel\n\n Names: יָרָבְעָם/Yarov'am (Hebrew - 'the people will contend'), Ἱεροβοάμ/Hieroboam (Greek)",
  tags: ["leader"]
},
{
  name: "Elijah",
  birthYear: '-000900',
  deathYear: '-000849',
  description: "Prophet, defended worship of Yahweh",
  longDescription: "Prophet, defended worship of Yahweh\n\n Names: אֵלִיָּהוּ/Eliyahu (Hebrew - 'my God is YHWH'), Ἠλίας/Elias (Greek)",
  tags: ["prophet"]
},
{
  name: "Elisha",
  birthYear: '-000850',
  deathYear: '-000800',
  description: "Prophet, successor of Elijah",
  longDescription: "Prophet, successor of Elijah\n\n Names: אֱלִישָׁע/Elisha (Hebrew - 'God is salvation'), Ἐλισσαῖος/Elissaios (Greek)",
  tags: ["prophet"]
},
{
  name: "Isaiah",
  birthYear: '-000765',
  deathYear: '-000695',
  description: "Prophet, predicted the coming of the Messiah",
  longDescription: "Prophet, predicted the coming of the Messiah\n\n Names: יְשַׁעְיָהוּ/Yeshayahu (Hebrew - 'YHWH is salvation'), Ἠσαΐας/Esaias (Greek)",
  tags: ["prophet"]
},
{
  name: "Jeremiah",
  birthYear: '-000650',
  deathYear: '-000570',
  description: "Prophet, witnessed the fall of Jerusalem",
  longDescription: "Prophet, witnessed the fall of Jerusalem\n\n Names: יִרְמְיָהוּ/Yirmeyahu (Hebrew - 'YHWH will exalt'), Ἰερεμίας/Ieremias (Greek)",
  tags: ["prophet"]
},
{
  name: "Ezekiel",
  birthYear: '-000622',
  deathYear: '-000570',
  description: "Prophet, known for visions including the valley of dry bones",
  longDescription: "Prophet, known for visions including the valley of dry bones\n\n Names: יְחֶזְקֵאל/Yechezkel (Hebrew - 'God strengthens'), Ἰεζεκιήλ/Iezekiel (Greek)",
  tags: ["prophet", "visionary"]
},
{
  name: "Daniel",
  birthYear: '-000620',
  deathYear: '-000538',
  description: "Prophet, interpreter of dreams, survived the lions' den",
  longDescription: "Prophet, interpreter of dreams, survived the lions' den\n\n Names: דָּנִיֵּאל/Daniyyel (Hebrew - 'God is my judge'), Δανιήλ/Daniel (Greek)",
  tags: ["prophet", "visionary"]
},
{
  name: "Hosea",
  birthYear: '-000785',
  deathYear: '-000725',
  description: "Prophet, known for his message of repentance",
  longDescription: "Prophet, known for his message of repentance\n\n Names: הוֹשֵׁעַ/Hoshea (Hebrew - 'salvation'), Ὡσηέ/Osee (Greek)",
  tags: ["prophet"]
},
{
  name: "Joel",
  birthYear: '-000835',
  deathYear: '-000805',
  description: "Prophet, author of the Book of Joel",
  longDescription: "Prophet, author of the Book of Joel\n\n Names: יוֹאֵל/Yoel (Hebrew - 'YHWH is God'), Ἰωήλ/Ioel (Greek)",
  tags: ["prophet"]
},
{
  name: "Amos",
  birthYear: '-000765',
  deathYear: '-000750',
  description: "Prophet, known for his call for social justice",
  longDescription: "Prophet, known for his call for social justice\n\n Names: עָמוֹס/Amos (Hebrew - 'burden bearer'), Ἀμώς/Amos (Greek)",
  tags: ["prophet"]
},
{
  name: "Obadiah",
  birthYear: '-000850',
  deathYear: '-000820',
  description: "Prophet, author of the shortest book in the Old Testament",
  longDescription: "Prophet, author of the shortest book in the Old Testament\n\n Names: עֹבַדְיָה/Ovadyah (Hebrew - 'servant of YHWH'), Ἀβδιού/Abdiou (Greek)",
  tags: ["prophet"]
},
{
  name: "Jonah",
  birthYear: '-000780',
  deathYear: '-000750',
  description: "Prophet, swallowed by a great fish",
  longDescription: "Prophet, swallowed by a great fish\n\n Names: יוֹנָה/Yonah (Hebrew - 'dove'), Ἰωνᾶς/Ionas (Greek)",
  tags: ["prophet"]
},
{
  name: "Micah",
  birthYear: '-000750',
  deathYear: '-000687',
  description: "Prophet, warned of judgment but foretold hope",
  longDescription: "Prophet, warned of judgment but foretold hope\n\n Names: מִיכָה/Michah (Hebrew - 'who is like YHWH'), Μιχαίας/Michaias (Greek)",
  tags: ["prophet"]
},
{
  name: "Nahum",
  birthYear: '-000720',
  deathYear: '-000680',
  description: "Prophet, foretold the fall of Nineveh",
  longDescription: "Prophet, foretold the fall of Nineveh\n\n Names: נַחוּם/Nachum (Hebrew - 'comfort'), Ναούμ/Naoum (Greek)",
  tags: ["prophet"]
},
{
  name: "Habakkuk",
  birthYear: '-000650',
  deathYear: '-000620',
  description: "Prophet, known for dialogue with God about justice",
  longDescription: "Prophet, known for dialogue with God about justice\n\n Names: חֲבַקּוּק/Chavakkuk (Hebrew), Ἀμβακούμ/Ambakoum (Greek)",
  tags: ["prophet"]
},
{
  name: "Zephaniah",
  birthYear: '-000640',
  deathYear: '-000610',
  description: "Prophet, warned of the Day of the Lord",
  longDescription: "Prophet, warned of the Day of the Lord\n\n Names: צְפַנְיָה/Tzefanyah (Hebrew - 'YHWH has hidden'), Σοφονίας/Sophonias (Greek)",
  tags: ["prophet"]
},
{
  name: "Haggai",
  birthYear: '-000520',
  deathYear: '-000500',
  description: "Prophet, encouraged rebuilding of the Temple",
  longDescription: "Prophet, encouraged rebuilding of the Temple\n\n Names: חַגַּי/Chaggai (Hebrew - 'festive'), Ἀγγαῖος/Aggaios (Greek)",
  tags: ["prophet"]
},
{
  name: "Zechariah",
  birthYear: '-000520',
  deathYear: '-000480',
  description: "Prophet, foretold the coming of the Messiah",
  longDescription: "Prophet, foretold the coming of the Messiah\n\n Names: זְכַרְיָה/Zecharyah (Hebrew - 'YHWH remembers'), Ζαχαρίας/Zacharias (Greek)",
  tags: ["prophet"]
},
{
  name: "Malachi",
  birthYear: '-000460',
  deathYear: '-000430',
  description: "Prophet, called for faithfulness and repentance",
  longDescription: "Prophet, called for faithfulness and repentance\n\n Names: מַלְאָכִי/Mal'achi (Hebrew - 'my messenger'), Μαλαχίας/Malachias (Greek)",
  tags: ["prophet"]
},
{
  name: "Ezra",
  birthYear: '-000480',
  deathYear: '-000440',
  description: "Priest and scribe, led return of the exiles to Jerusalem",
  longDescription: "Priest and scribe, led return of the exiles to Jerusalem\n\n Names: עֶזְרָא/Ezra (Hebrew - 'help'), Ἔσδρας/Esdras (Greek)",
  tags: ["priest", "leader", "scholar"]
},
{
  name: "Nehemiah",
  birthYear: '-000480',
  deathYear: '-000430',
  description: "Governor, rebuilt the walls of Jerusalem",
  longDescription: "Governor, rebuilt the walls of Jerusalem\n\n Names: נְחֶמְיָה/Nechemyah (Hebrew - 'YHWH comforts'), Νεεμίας/Neemias (Greek)",
  tags: ["leader"]
},
{
  name: "Esther",
  birthYear: '-000500',
  deathYear: '-000460',
  description: "Queen of Persia, saved the Jews from destruction",
  longDescription: "Queen of Persia, saved the Jews from destruction\n\n Names: אֶסְתֵּר/Esther (Hebrew, from Persian), Ἐσθήρ/Esther (Greek)",
  tags: ["leader", "patriarch"]
},
{
  name: "Mordecai",
  birthYear: '-000500',
  deathYear: '-000460',
  description: "Guardian of Esther, helped save the Jews",
  longDescription: "Guardian of Esther, helped save the Jews\n\n Names: מָרְדֳּכַי/Mordechai (Hebrew, from Babylonian), Μαρδοχαῖος/Mardochaios (Greek)",
  tags: ["leader", "patriarch"]
},
{
  name: "Job",
  birthYear: '-001800',
  deathYear: '-001700',
  description: "Subject of the Book of Job, known for his patience in suffering",
  longDescription: "Subject of the Book of Job, known for his patience in suffering\n\n Names: אִיּוֹב/Iyyov (Hebrew), Ἰώβ/Iob (Greek)",
  tags: ["patriarch"]
},
{
  name: "Judas Maccabeus",
  birthYear: '-000190',
  deathYear: '-000160',
  description: "Son of Mattathias, leader of the Maccabean revolt, known for his military prowess",
  longDescription: "Son of Mattathias, leader of the Maccabean revolt, known for his military prowess\n\n Names: יְהוּדָה מַקַּבִּי/Yehudah Makkabi (Hebrew - 'Judah the Hammer'), Ἰούδας Μακκαβαῖος/Ioudas Makkabaios (Greek)",
  tags: ["warrior", "martyr", "leader"]
}
]
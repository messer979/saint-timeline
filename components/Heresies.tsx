interface HistoricalHeresy {
  name: string;
  start: string;
  description: string;
  longDescription: string;
}

export const heresies: HistoricalHeresy[] = [
  {
    name: "Arianism",
    start: "0320",
    description: "Jesus as created, inferior to God",
    longDescription: "Arianism (https://en.wikipedia.org/wiki/Arianism)"
  },
  {
    name: "Docetism",
    start: "0100",
    description: "Denied Christ's physical incarnation",
    longDescription: "Docetism asserted that Christ only appeared to be human, denying the reality of His physical body and suffering. This belief was rooted in the idea that material flesh was inherently corrupt. Early church fathers, including Ignatius of Antioch, strongly opposed Docetism, emphasizing the importance of Christ's real humanity for salvation."
  },
  {
    name: "Gnosticism",
    start: "0100",
    description: "Secret knowledge, dualistic worldview",
    longDescription: "Gnosticism was a belief system that claimed salvation through secret knowledge, presenting a dualistic view of the world as divided into a corrupt material realm and a pure spiritual realm. Gnostics generally rejected the Old Testament and saw Christ as a divine figure sent to bring enlightenment, not as truly human. It was addressed by early Christian apologists such as Irenaeus in 'Against Heresies.'"
  },
  {
    name: "Marcionism",
    start: "0144",
    description: "Rejected Old Testament; dualistic",
    longDescription: "Founded by Marcion of Sinope, Marcionism rejected the Old Testament and the God depicted in it, viewing the Hebrew God as separate and inferior to the New Testament God of love. Marcion proposed his own New Testament canon, excluding Jewish scriptures. This heresy influenced the formation of the Christian biblical canon."
  },
  {
    name: "Montanism",
    start: "0156",
    description: "Apocalyptic, strict morality",
    longDescription: "Montanism emerged as an apocalyptic movement led by Montanus, claiming new prophecy and a more rigorous moral code. The movement expected the imminent return of Christ and emphasized asceticism. Montanism was seen as a threat to the authority of Church leadership and was eventually condemned by local bishops."
  },
  {
    name: "Modalism",
    start: "0190",
    description: "God as modes, not persons",
    longDescription: "Modalism taught that God is one person who appeared in different 'modes' as the Father, Son, and Holy Spirit, rather than as three distinct persons. This heresy denied the Trinity and was countered by theologians like Tertullian, who argued for the concept of three persons in one essence."
  },
  {
    name: "Nestorianism",
    start: "0431",
    description: "Separate persons in Christ",
    longDescription: "Nestorianism, named after Nestorius, Patriarch of Constantinople, proposed that Christ had two separate persons — one divine and one human. This view undermined the unity of Christ's nature. It was condemned at the Council of Ephesus in 431 AD, which affirmed that Mary was Theotokos (God-bearer), supporting the unity of Christ's person."
  },
  {
    name: "Pelagianism",
    start: "0415",
    description: "Rejected original sin, grace",
    longDescription: "Pelagianism, attributed to the British monk Pelagius, denied original sin and the necessity of divine grace for salvation. Pelagius argued that humans could achieve moral perfection on their own. This doctrine was opposed by Augustine and condemned at the Council of Carthage in 418 AD."
  },
  {
    name: "Monophysitism",
    start: "0451",
    description: "Single divine nature in Christ",
    longDescription: "Monophysitism held that Christ had only one nature, a single divine nature that absorbed his humanity. This was in contrast to the orthodox belief in Christ's two natures, human and divine. Monophysitism was condemned at the Council of Chalcedon in 451 AD, which affirmed the doctrine of two natures."
  },
  {
    name: "Monothelitism",
    start: "0681",
    description: "Single will in Christ",
    longDescription: "Monothelitism taught that Christ had only one will, even though he had two natures, human and divine. This compromise attempt to reconcile with Monophysitism was ultimately rejected. Monothelitism was condemned at the Third Council of Constantinople in 681 AD."
  },
  {
    name: "Iconoclasm",
    start: "0726",
    description: "Opposition to religious icons",
    longDescription: "Iconoclasm was a movement opposing the use of religious images, claiming they constituted idolatry. It led to widespread destruction of icons, especially in the Byzantine Empire, and was condemned by the Second Council of Nicaea in 787 AD, which affirmed the veneration of icons."
  },
  {
    name: "Catharism",
    start: "1140",
    description: "Dualistic, ascetic sect",
    longDescription: "Catharism was a dualistic belief system that viewed the material world as evil and rejected the Catholic hierarchy. Cathars believed in a dualism of good and evil, similar to Gnostic views, and practiced a strict ascetic lifestyle. The Albigensian Crusade was launched in 1209 to eradicate Catharism in southern France."
  },
  {
    name: "Albigensianism",
    start: "1167",
    description: "Offshoot of Catharism",
    longDescription: "Albigensianism, related to Catharism, was prominent in the Languedoc region of France. It was characterized by its anti-materialism and rejection of Catholic sacraments and clergy. Like Catharism, it faced strong opposition from the Church and was targeted in the Albigensian Crusade."
  }
];
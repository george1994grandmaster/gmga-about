import facebookIcon from "../assets/images/facebookIcon.svg";
import phoneIcon from "../assets/images/phoneIcon.svg";
import mailIcon from "../assets/images/mailIcon.svg";
import pinIcon from "../assets/images/pinIcon.svg";
import instagramIcon from "../assets/images/instagramIcon.svg";
import cardImg1 from "../assets/images/cardImg1.png";
import cardImg2 from "../assets/images/cardImg2.png";
import profileBanner from "../assets/images/profileBanner.png";
import profileImg from "../assets/images/profileImg.png";
import CardProfilFirst from "../assets/images/cardProfilFirst.png";
import CardProfilSecond from "../assets/images/cardProfilSecond.png";
import CardProfilThirth from "../assets/images/cardProfilThirth.png";
import slideImg1 from "../assets/images/slideImg1.png";
import slideImg2 from "../assets/images/slideImg2.png";
import slideImg3 from "../assets/images/slideImg3.png";
import whatsapp from "../assets/images/whatsappIcon.svg";
import languageIcon from "../assets/images/languageIcon.svg";
import mes from "../assets/images/mes.svg";
import download from "../assets/images/download.svg";
import eye from "../assets/images/eye.svg";
import like from "../assets/images/like.svg";
import message from "../assets/images/message.svg";
import arrowUp from "../assets/images/arrowUp.svg";

export const imageContent = [
  "https://media.newyorker.com/photos/5e506688b9920c00082c1417/master/w_2560%2Cc_limit/200302_r35897.jpg",
  "https://media.istockphoto.com/id/175515475/photo/mountains.jpg?s=612x612&w=0&k=20&c=e0TxdqpmQxgSYoHiB6F6x-SLsLbIeW7yM3weSBNyZ5U=",
  "https://res.cloudinary.com/dpj4hptgm/image/upload/v1671895744/about-gmga/shutterstock_700116601_di7gmw.png",
  "https://res.cloudinary.com/dpj4hptgm/image/upload/v1671895698/about-gmga/309221692_6221345807881380_5812923493016265711_n_mjisme.jpg",
  "https://res.cloudinary.com/dpj4hptgm/image/upload/v1671895698/about-gmga/309221692_6221345807881380_5812923493016265711_n_mjisme.jpg",
  "https://res.cloudinary.com/dpj4hptgm/image/upload/v1671895747/about-gmga/jackman-chiu-36Vbwo1OiZU-unsplash_ibv9gk.png",
  "https://res.cloudinary.com/dpj4hptgm/image/upload/v1671895743/about-gmga/shutterstock_1438144244_1_sl5qro.png",
  "https://res.cloudinary.com/dpj4hptgm/image/upload/v1671895744/about-gmga/shutterstock_700116601_di7gmw.png",
  "https://res.cloudinary.com/dpj4hptgm/image/upload/v1671895698/about-gmga/309221692_6221345807881380_5812923493016265711_n_mjisme.jpg",
  "https://res.cloudinary.com/dpj4hptgm/image/upload/v1671895698/about-gmga/309221692_6221345807881380_5812923493016265711_n_mjisme.jpg",
];

export const reactIcons = [
  {
    icon: like,
    text: "Like",
  },
  {
    icon: mes,
    text: "Comments",
  },
  { icon: download, text: "share" },
];

export const postComment = [
  {
    id: "1main",
    name: "Giorgi Tsibakhashvili",
    commenterImage: cardImg1,
    timestamp: 1543943574000,
    text: "this is 1main comment which has 1 reply and this reply has 3 doublereplies, industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    replies: [
      {
        id: "1reply1",
        name: "Giorgi Tsibakhashvili",
        commenterImage: cardImg1,
        timestamp: 1651684374000,
        text: "1reply1 comment industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        replies: [
          {
            id: "1doubleReply1",
            name: "Giorgi Tsibakhashvili",
            commenterImage: cardImg1,
            timestamp: 1670173974000,
            text: "1doubleReply1 industry's standard dummy text ever since the 1500s.",
          },
          {
            id: "1doubleReply2",
            name: "Giorgi Tsibakhashvili",
            commenterImage: cardImg1,
            timestamp: 1671901974000,
            text: "1doubleReply2 industry's standard dummy text.",
          },
          {
            id: "1doubleReply3",
            name: "Giorgi Tsibakhashvili",
            commenterImage: cardImg1,
            timestamp: 1672171974000,
            text: "1doubleReply3 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
        ],
      },
    ],
  },
  {
    id: "2main",
    name: "Giorgi Tsibakhashvili",
    commenterImage: cardImg1,
    timestamp: 1672184994000,
    text: "2main industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    replies: [],
  },
  {
    id: "3main",
    name: "Giorgi Tsibakhashvili",
    commenterImage: cardImg1,
    timestamp: 1543943574000,
    text: "3main industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    replies: [
      {
        id: "3reply1",
        name: "Giorgi Tsibakhashvili",
        commenterImage: cardImg1,
        timestamp: 1543943574000,
        text: "3reply1 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        replies: [
          {
            id: "3reply1doubleReply1",
            name: "Giorgi Tsibakhashvili",
            commenterImage: cardImg1,
            timestamp: 1543943574000,
            text: "3reply1doubleReply1 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
        ],
      },
      {
        id: "3reply2",
        name: "Giorgi Tsibakhashvili",
        commenterImage: cardImg1,
        timestamp: 1543943574000,
        text: "3reply2 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        replies: [
          {
            id: "3reply2doubleReply1",
            name: "Giorgi Tsibakhashvili",
            commenterImage: cardImg1,
            timestamp: 1543943574000,
            text: "3reply2doubleReply1 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: "3reply2doubleReply2",
            name: "Giorgi Tsibakhashvili",
            commenterImage: cardImg1,
            timestamp: 1543943574000,
            text: "3reply2doubleReply2 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: "3reply2doubleReply3",
            name: "Giorgi Tsibakhashvili",
            commenterImage: cardImg1,
            timestamp: 1543943574000,
            text: "3reply2doubleReply3 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: "3reply2doubleReply4",
            name: "Giorgi Tsibakhashvili",
            commenterImage: cardImg1,
            timestamp: 1543943574000,
            text: "3reply2doubleReply4 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: "3reply2doubleReply5",
            name: "Giorgi Tsibakhashvili",
            commenterImage: cardImg1,
            timestamp: 1543943574000,
            text: "3reply2doubleReply5 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: "3reply2doubleReply6",
            name: "Giorgi Tsibakhashvili",
            commenterImage: cardImg1,
            timestamp: 1543943574000,
            text: "3reply2doubleReply6 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: "3reply2doubleReply7",
            name: "Giorgi Tsibakhashvili",
            commenterImage: cardImg1,
            timestamp: 1543943574000,
            text: "3reply2doubleReply7 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: "3reply2doubleReply8",
            name: "Giorgi Tsibakhashvili",
            commenterImage: cardImg1,
            timestamp: 1543943574000,
            text: "3reply2doubleReply8 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: "3reply2doubleReply9",
            name: "Giorgi Tsibakhashvili",
            commenterImage: cardImg1,
            timestamp: 1543943574000,
            text: "3reply2doubleReply9 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: "3reply2doubleReply10",
            name: "Giorgi Tsibakhashvili",
            commenterImage: cardImg1,
            timestamp: 1543943574000,
            text: "3reply2doubleReply10 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: "3reply2doubleReply11",
            name: "Giorgi Tsibakhashvili",
            commenterImage: cardImg1,
            timestamp: 1543943574000,
            text: "3reply2doubleReply11 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            id: "3reply2doubleReply12",
            name: "Giorgi Tsibakhashvili",
            commenterImage: cardImg1,
            timestamp: 1543943574000,
            text: "3reply2doubleReply12 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
        ],
      },
      {
        id: "3reply3",
        name: "Giorgi Tsibakhashvili",
        commenterImage: cardImg1,
        timestamp: 1543943574000,
        text: "3reply3 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: "3reply4",
        name: "Giorgi Tsibakhashvili",
        commenterImage: cardImg1,
        timestamp: 1543943574000,
        text: "3reply4 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: "3reply5",
        name: "Giorgi Tsibakhashvili",
        commenterImage: cardImg1,
        timestamp: 1543943574000,
        text: "3reply5 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: "3reply6",
        name: "Giorgi Tsibakhashvili",
        commenterImage: cardImg1,
        timestamp: 1543943574000,
        text: "3reply6 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: "3reply7",
        name: "Giorgi Tsibakhashvili",
        commenterImage: cardImg1,
        timestamp: 1543943574000,
        text: "3reply7 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },
  {
    id: "4main",
    name: "Giorgi Tsibakhashvili",
    commenterImage: cardImg1,
    timestamp: 1672184994000,
    text: "4main industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    replies: [],
  },
  {
    id: "5main",
    name: "Giorgi Tsibakhashvili",
    commenterImage: cardImg1,
    timestamp: 1672184994000,
    text: "5main industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    replies: [],
  },
  {
    id: "6main",
    name: "Giorgi Tsibakhashvili",
    commenterImage: cardImg1,
    timestamp: 1672184994000,
    text: "6main industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    replies: [],
  },
  {
    id: "7main",
    name: "Giorgi Tsibakhashvili",
    commenterImage: cardImg1,
    timestamp: 1672184994000,
    text: "7main industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    replies: [],
  },
];
export const contactData = [
  {
    icon: phoneIcon,
    text: "+995 555 11 22 33",
  },
  {
    icon: mailIcon,
    text: "gmgamail@gmga.ge",
  },
  {
    icon: pinIcon,
    text: "Khorava St.23, Tbilisi, Georgia",
  },
  {
    icon: instagramIcon,
    text: "instagram.com/gmga_",
  },
  {
    icon: facebookIcon,
    text: "fb.com/gmga",
  },
];

export const Activities = [
  {
    activity: "ski",
  },
  {
    activity: "trekking",
  },
  {
    activity: "rock climbing",
  },
  {
    activity: "alpine",
  },
  {
    activity: "mountain",
  },
];

export const aboutDescription = [
  "industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  " industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of ets ",
];

export const missionDescription =
  " industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.";

export const Cards = [
  {
    img: cardImg1,
    title: "Giorgi Tsibakhashvili",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
		 			 It has roots in a piece of classical Latin\
		  		 literature from 45 BC,",
    skills: ["SKI", "TREKKING"],
  },
  {
    img: cardImg2,
    title: "Giorgi Tsibakhashvili",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
		 			 It has roots in a piece of classical Latin\
		  		 literature from 45 BC,",
    skills: ["SKI", "ROCK CLIMBING"],
  },
  {
    img: cardImg1,
    title: "Giorgi Tsibakhashvili",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
		 			 It has roots in a piece of classical Latin\
		  		 literature from 45 BC,",
    skills: ["SKI", "ALPINE"],
  },
  {
    img: cardImg2,
    title: "Giorgi Tsibakhashvili",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
		 			 It has roots in a piece of classical Latin\
		  		 literature from 45 BC,",
    skills: ["SKI", "ROCK CLIMBING", "MOUNTAIN"],
  },
  {
    img: cardImg1,
    title: "Giorgi Tsibakhashvili",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
		 			 It has roots in a piece of classical Latin\
		  		 literature from 45 BC,",
    skills: ["TREKKING", "ROCK CLIMBING", "ALPINE"],
  },
  {
    img: cardImg2,
    title: "Giorgi Tsibakhashvili",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
		 			 It has roots in a piece of classical Latin\
		  		 literature from 45 BC,",
    skills: ["SKI", "ROCK CLIMBING", "MOUNTAIN"],
  },
  {
    img: cardImg1,
    title: "Giorgi Tsibakhashvili",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
		 			 It has roots in a piece of classical Latin\
		  		 literature from 45 BC,",
    skills: ["SKI", "ALPINE", "MOUNTAIN"],
  },
  {
    img: cardImg2,
    title: "Giorgi Tsibakhashvili",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
		 			 It has roots in a piece of classical Latin\
		  		 literature from 45 BC,",
    skills: ["ROCK CLIMBING", "MOUNTAIN"],
  },
  {
    img: cardImg1,
    title: "Giorgi Tsibakhashvili",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
		 			 It has roots in a piece of classical Latin\
		  		 literature from 45 BC,",
    skills: ["SKI", "TREKKING", "ROCK CLIMBING"],
  },
  {
    img: cardImg2,
    title: "Giorgi Tsibakhashvili",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
		 			 It has roots in a piece of classical Latin\
		  		 literature from 45 BC,",
    skills: ["SKI", "ALPINE"],
  },
  {
    img: cardImg1,
    title: "Giorgi Tsibakhashvili",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
		 			 It has roots in a piece of classical Latin\
		  		 literature from 45 BC,",
    skills: ["ROCK CLIMBING", "ALPINE"],
  },
  {
    img: cardImg2,
    title: "Giorgi Tsibakhashvili",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
		 			 It has roots in a piece of classical Latin\
		  		 literature from 45 BC,",
    skills: ["SKI", "ROCK CLIMBING"],
  },
  {
    img: cardImg1,
    title: "Giorgi Tsibakhashvili",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
		 			 It has roots in a piece of classical Latin\
		  		 literature from 45 BC,",
    skills: ["SKI", "TREKKING"],
  },
  {
    img: cardImg2,
    title: "Giorgi Tsibakhashvili",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
		 			 It has roots in a piece of classical Latin\
		  		 literature from 45 BC,",
    skills: ["TREKKING", "ROCK CLIMBING", "ALPINE"],
  },
  {
    img: cardImg1,
    title: "Giorgi Tsibakhashvili",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
		 			 It has roots in a piece of classical Latin\
		  		 literature from 45 BC,",
    skills: ["TREKKING", "ROCK CLIMBING"],
  },
  {
    img: cardImg2,
    title: "Giorgi Tsibakhashvili",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
		 			 It has roots in a piece of classical Latin\
		  		 literature from 45 BC,",
    skills: ["TREKKING", "MOUNTAIN"],
  },
];

export const ProfileInfo = [
  {
    profileBanner: profileBanner,
    profileImg: profileImg,
    profileName: "GIORGI TSIBAKHASHVILI",
    skills: ["trekking", "mountain", "alpine"],
    contactsInfo: [
      {
        itemName: "whatsapp",
        itemIcon: whatsapp,
        itemText: "whatsapp",
      },
      {
        itemName: "phone",
        itemIcon: phoneIcon,
        itemText: "+995599465345",
      },
      {
        itemName: "language",
        itemIcon: languageIcon,
        itemText: ["Geo", "Eng", "Rus"],
      },
      {
        itemName: "instagram",
        itemIcon: instagramIcon,
        itemText: "instagram",
      },
      {
        itemName: "mail",
        itemIcon: mailIcon,
        itemText: "gmgagmail@.ge",
      },
    ],
    aboutName: "GIORGI",
    aboutText:
      "industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentitype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially emaining essentially emaining essentially unchanged.It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
    slider: [
      {
        slideImg: slideImg1,
      },
      {
        slideImg: slideImg2,
      },
      {
        slideImg: slideImg3,
      },
      {
        slideImg: slideImg1,
      },
      {
        slideImg: slideImg2,
      },
      {
        slideImg: slideImg3,
      },
    ],

    cardPosts: [
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "It has roots in a piece of classical Latin\
								literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: like,
            usersViewText: "2315",
            type: "like",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
            type: "comments",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
            type: "share",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Sasha uplisashvili",
        date: "12 dec 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							  literature from 45 BC,Contrary to popular belief, Lorem Ipsum is not simply random text\
                literature from 45 BC,Contrary to popular belief, Lorem Ipsum is not simply random text",
        img: CardProfilThirth,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Sasha uplisashvili",
        date: "12 dec 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: "",
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "David.d",
        date: "12 dec 2022",
        text: "",
        img: CardProfilFirst,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Sasha uplisashvili",
        date: "12 dec 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,\
							 Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,Contrary to popular belief,\
							  Lorem Ipsum is not simply random text.\
							 It has roots in a piece of classical Latin\
							literature from 45 BC,",
        img: "",
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "David.d",
        date: "12 dec 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
							It has roots in a piece of classical Latin\
			 				 literature from 45 BC,",
        img: CardProfilThirth,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "David.d",
        date: "12 dec 2022",
        text: "",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "David.d",
        date: "12 dec 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
							It has roots in a piece of classical Latin\
			 				 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "David.d",
        date: "12 dec 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
							It has roots in a piece of classical Latin\
			 				 literature from 45 BC,",
        img: CardProfilFirst,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },

      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
      {
        profile: profileImg,
        name: "Giorgi Tsibakhashvili",
        date: "24 jan 2022",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.\
								It has roots in a piece of classical Latin\
							 literature from 45 BC,",
        img: CardProfilSecond,
        usersView: [
          {
            usersViewIcon: eye,
            usersViewText: "135",
          },
          {
            usersViewIcon: message,
            usersViewText: "154",
          },
          {
            usersViewIcon: arrowUp,
            usersViewText: "52",
          },
        ],
        usersHandle: [
          {
            userHandle: like,
          },
          {
            userHandle: mes,
          },
          {
            userHandle: download,
          },
        ],
      },
    ],
  },
];

export const CoachSkills = [
  "SKI",
  "TREKKING",
  "ROCK CLIMBING",
  "alpine",
  "MOUNTAIN",
];

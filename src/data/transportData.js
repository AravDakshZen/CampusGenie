/**
 * Rajalakshmi Engineering College (REC) Complete Transport Dataset
 * Official Reference: https://www.rectransport.com/js/146routedec25.php
 * Total Routes: 147 official REC bus routes.
 */

export const transportMeta = {
  department: "Rajalakshmi Engineering College – Transport Department",
  source: "REC Transport Department (rectransport.com)",
  officialSourceUrl: "https://www.rectransport.com/js/146routedec25.php",
  totalRoutes: 147,
  helpline: ["044 6718 1069", "044 6718 1040"],
  coordinators: [
    { name: "A. Natarajan", phone: "90252 24606", role: "Transport In-charge" },
    { name: "L. Ramajayam", phone: "90252 24605", role: "Route Coordinator" },
    { name: "M. Venkatesan", phone: "75488 62533", role: "Fleet Supervisor" },
  ],
  email: "rectransport@rajalakshmi.edu.in",
  campusLocation: "Rajalakshmi Nagar, Thandalam, Chennai - 602 105 (NH4)",
  returnSchedules: [
    { time: "3:15 PM", busesCount: 65, description: "Common return routes across all arterial corridors" },
    { time: "5:05 PM", busesCount: 65, description: "Common return routes for lab/sports/special classes" },
  ],
};

export const busRoutes = [
  {
    "id": "bus-1",
    "sno": 1,
    "busNumber": "1",
    "routeNumber": "1",
    "routeName": "Ennore to REC Campus",
    "destination": "Ennore",
    "startingPoint": "Ennore",
    "startingTime": "5:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 1",
    "status": "Scheduled",
    "statusDetail": "Ennore transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n01.php",
    "stops": [
      {
        "name": "Ennore",
        "time": "5:40 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Ennore Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 1"
      }
    ]
  },
  {
    "id": "bus-1b",
    "sno": 2,
    "busNumber": "1B",
    "routeNumber": "1B",
    "routeName": "Beach Station to REC Campus",
    "destination": "Beach Station",
    "startingPoint": "Beach Station",
    "startingTime": "6:18 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 1",
    "status": "Scheduled",
    "statusDetail": "Beach Station transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n01b.php",
    "stops": [
      {
        "name": "Beach Station",
        "time": "6:18 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Beach Station Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 1"
      }
    ]
  },
  {
    "id": "bus-1c",
    "sno": 3,
    "busNumber": "1C",
    "routeNumber": "1C",
    "routeName": "Tondiarpet (RTO Office) to REC Campus",
    "destination": "Tondiarpet (RTO Office)",
    "startingPoint": "Tondiarpet (RTO Office)",
    "startingTime": "6:05 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 1",
    "status": "Scheduled",
    "statusDetail": "Tondiarpet (RTO Office) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n01c.php",
    "stops": [
      {
        "name": "Tondiarpet (RTO Office)",
        "time": "6:05 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Tondiarpet (RTO Office) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 1"
      }
    ]
  },
  {
    "id": "bus-2",
    "sno": 4,
    "busNumber": "2",
    "routeNumber": "2",
    "routeName": "Tondiarpet to REC Campus",
    "destination": "Tondiarpet",
    "startingPoint": "Tondiarpet",
    "startingTime": "6:10 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 2",
    "status": "Scheduled",
    "statusDetail": "Tondiarpet transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n02.php",
    "stops": [
      {
        "name": "Tondiarpet",
        "time": "6:10 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Tondiarpet Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 2"
      }
    ]
  },
  {
    "id": "bus-2b",
    "sno": 5,
    "busNumber": "2B",
    "routeNumber": "2B",
    "routeName": "Ajax to REC Campus",
    "destination": "Ajax",
    "startingPoint": "Ajax",
    "startingTime": "5:50 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 2",
    "status": "Scheduled",
    "statusDetail": "Ajax transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n02b.php",
    "stops": [
      {
        "name": "Ajax",
        "time": "5:50 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Ajax Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 2"
      }
    ]
  },
  {
    "id": "bus-2c",
    "sno": 6,
    "busNumber": "2C",
    "routeNumber": "2C",
    "routeName": "Mint to REC Campus",
    "destination": "Mint",
    "startingPoint": "Mint",
    "startingTime": "6:10 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 2",
    "status": "Scheduled",
    "statusDetail": "Mint transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n02c.php",
    "stops": [
      {
        "name": "Mint",
        "time": "6:10 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Mint Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 2"
      }
    ]
  },
  {
    "id": "bus-3",
    "sno": 7,
    "busNumber": "3",
    "routeNumber": "3",
    "routeName": "Choolai to REC Campus",
    "destination": "Choolai",
    "startingPoint": "Choolai",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 3",
    "status": "Scheduled",
    "statusDetail": "Choolai transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n03.php",
    "stops": [
      {
        "name": "Choolai",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Choolai Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 3"
      }
    ]
  },
  {
    "id": "bus-3b",
    "sno": 8,
    "busNumber": "3B",
    "routeNumber": "3B",
    "routeName": "Kilpauk Kallarai to REC Campus",
    "destination": "Kilpauk Kallarai",
    "startingPoint": "Kilpauk Kallarai",
    "startingTime": "6:35 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 3",
    "status": "Scheduled",
    "statusDetail": "Kilpauk Kallarai transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n03b.php",
    "stops": [
      {
        "name": "Kilpauk Kallarai",
        "time": "6:35 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Kilpauk Kallarai Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 3"
      }
    ]
  },
  {
    "id": "bus-3c",
    "sno": 9,
    "busNumber": "3C",
    "routeNumber": "3C",
    "routeName": "Doveton Bridge to REC Campus",
    "destination": "Doveton Bridge",
    "startingPoint": "Doveton Bridge",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 3",
    "status": "Scheduled",
    "statusDetail": "Doveton Bridge transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n03c.php",
    "stops": [
      {
        "name": "Doveton Bridge",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Doveton Bridge Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 3"
      }
    ]
  },
  {
    "id": "bus-4",
    "sno": 10,
    "busNumber": "4",
    "routeNumber": "4",
    "routeName": "Chintadripet to REC Campus",
    "destination": "Chintadripet",
    "startingPoint": "Chintadripet",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 4",
    "status": "Scheduled",
    "statusDetail": "Chintadripet transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n04.php",
    "stops": [
      {
        "name": "Chintadripet",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Chintadripet Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 4"
      }
    ]
  },
  {
    "id": "bus-4c",
    "sno": 11,
    "busNumber": "4C",
    "routeNumber": "4C",
    "routeName": "Loyola College to REC Campus",
    "destination": "Loyola College",
    "startingPoint": "Loyola College",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 4",
    "status": "Scheduled",
    "statusDetail": "Loyola College transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n04c.php",
    "stops": [
      {
        "name": "Loyola College",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Loyola College Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 4"
      }
    ]
  },
  {
    "id": "bus-5",
    "sno": 12,
    "busNumber": "5",
    "routeNumber": "5",
    "routeName": "Chintamani to REC Campus",
    "destination": "Chintamani",
    "startingPoint": "Chintamani",
    "startingTime": "6:25 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 5",
    "status": "Scheduled",
    "statusDetail": "Chintamani transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n05.php",
    "stops": [
      {
        "name": "Chintamani",
        "time": "6:25 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Chintamani Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 5"
      }
    ]
  },
  {
    "id": "bus-5a",
    "sno": 13,
    "busNumber": "5A",
    "routeNumber": "5A",
    "routeName": "Arumbakkam to REC Campus",
    "destination": "Arumbakkam",
    "startingPoint": "Arumbakkam",
    "startingTime": "6:35 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 5",
    "status": "Scheduled",
    "statusDetail": "Arumbakkam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n05a.php",
    "stops": [
      {
        "name": "Arumbakkam",
        "time": "6:35 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Arumbakkam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 5"
      }
    ]
  },
  {
    "id": "bus-5b",
    "sno": 14,
    "busNumber": "5B",
    "routeNumber": "5B",
    "routeName": "Maduravoyal Erikarai to REC Campus",
    "destination": "Maduravoyal Erikarai",
    "startingPoint": "Maduravoyal Erikarai",
    "startingTime": "7:00 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 5",
    "status": "Scheduled",
    "statusDetail": "Maduravoyal Erikarai transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n05b.php",
    "stops": [
      {
        "name": "Maduravoyal Erikarai",
        "time": "7:00 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Maduravoyal Erikarai Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 5"
      }
    ]
  },
  {
    "id": "bus-5c",
    "sno": 15,
    "busNumber": "5C",
    "routeNumber": "5C",
    "routeName": "Thirunagar (Ambica Empire Hotel) to REC Campus",
    "destination": "Thirunagar (Ambica Empire Hotel)",
    "startingPoint": "Thirunagar (Ambica Empire Hotel)",
    "startingTime": "6:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 5",
    "status": "Scheduled",
    "statusDetail": "Thirunagar (Ambica Empire Hotel) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n05c.php",
    "stops": [
      {
        "name": "Thirunagar (Ambica Empire Hotel)",
        "time": "6:40 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Thirunagar (Ambica Empire Hotel) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 5"
      }
    ]
  },
  {
    "id": "bus-5d",
    "sno": 16,
    "busNumber": "5D",
    "routeNumber": "5D",
    "routeName": "Toyota Showroom to REC Campus",
    "destination": "Toyota Showroom",
    "startingPoint": "Toyota Showroom",
    "startingTime": "6:50 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 5",
    "status": "Scheduled",
    "statusDetail": "Toyota Showroom transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n05d.php",
    "stops": [
      {
        "name": "Toyota Showroom",
        "time": "6:50 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Toyota Showroom Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 5"
      }
    ]
  },
  {
    "id": "bus-6",
    "sno": 17,
    "busNumber": "6",
    "routeNumber": "6",
    "routeName": "New Avadi Road Water Tank to REC Campus",
    "destination": "New Avadi Road Water Tank",
    "startingPoint": "New Avadi Road Water Tank",
    "startingTime": "6:25 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 6",
    "status": "Scheduled",
    "statusDetail": "New Avadi Road Water Tank transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n06.php",
    "stops": [
      {
        "name": "New Avadi Road Water Tank",
        "time": "6:25 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "New Avadi Road Water Tank Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 6"
      }
    ]
  },
  {
    "id": "bus-6a",
    "sno": 18,
    "busNumber": "6A",
    "routeNumber": "6A",
    "routeName": "Krishna Nagar (Vellammal School) to REC Campus",
    "destination": "Krishna Nagar (Vellammal School)",
    "startingPoint": "Krishna Nagar (Vellammal School)",
    "startingTime": "6:45 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 6",
    "status": "Scheduled",
    "statusDetail": "Krishna Nagar (Vellammal School) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n06a.php",
    "stops": [
      {
        "name": "Krishna Nagar (Vellammal School)",
        "time": "6:45 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Krishna Nagar (Vellammal School) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 6"
      }
    ]
  },
  {
    "id": "bus-7",
    "sno": 19,
    "busNumber": "7",
    "routeNumber": "7",
    "routeName": "Anna Nagar East to REC Campus",
    "destination": "Anna Nagar East",
    "startingPoint": "Anna Nagar East",
    "startingTime": "6:35 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 7",
    "status": "Scheduled",
    "statusDetail": "Anna Nagar East transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n07.php",
    "stops": [
      {
        "name": "Anna Nagar East",
        "time": "6:35 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Anna Nagar East Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 7"
      }
    ]
  },
  {
    "id": "bus-7c",
    "sno": 20,
    "busNumber": "7C",
    "routeNumber": "7C",
    "routeName": "Collector nagar to REC Campus",
    "destination": "Collector nagar",
    "startingPoint": "Collector nagar",
    "startingTime": "6:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 7",
    "status": "Scheduled",
    "statusDetail": "Collector nagar transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n07c.php",
    "stops": [
      {
        "name": "Collector nagar",
        "time": "6:40 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Collector nagar Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 7"
      }
    ]
  },
  {
    "id": "bus-8",
    "sno": 21,
    "busNumber": "8",
    "routeNumber": "8",
    "routeName": "Anna nagar West Depot to REC Campus",
    "destination": "Anna nagar West Depot",
    "startingPoint": "Anna nagar West Depot",
    "startingTime": "6:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 8",
    "status": "Scheduled",
    "statusDetail": "Anna nagar West Depot transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n08.php",
    "stops": [
      {
        "name": "Anna nagar West Depot",
        "time": "6:40 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Anna nagar West Depot Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 8"
      }
    ]
  },
  {
    "id": "bus-8c",
    "sno": 22,
    "busNumber": "8C",
    "routeNumber": "8C",
    "routeName": "Waves to REC Campus",
    "destination": "Waves",
    "startingPoint": "Waves",
    "startingTime": "6:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 8",
    "status": "Scheduled",
    "statusDetail": "Waves transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n08c.php",
    "stops": [
      {
        "name": "Waves",
        "time": "6:40 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Waves Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 8"
      }
    ]
  },
  {
    "id": "bus-9",
    "sno": 23,
    "busNumber": "9",
    "routeNumber": "9",
    "routeName": "Mogappair East to REC Campus",
    "destination": "Mogappair East",
    "startingPoint": "Mogappair East",
    "startingTime": "6:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 9",
    "status": "Scheduled",
    "statusDetail": "Mogappair East transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n09.php",
    "stops": [
      {
        "name": "Mogappair East",
        "time": "6:40 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Mogappair East Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 9"
      }
    ]
  },
  {
    "id": "bus-9a",
    "sno": 24,
    "busNumber": "9A",
    "routeNumber": "9A",
    "routeName": "Mogappair (Golden Flat) to REC Campus",
    "destination": "Mogappair (Golden Flat)",
    "startingPoint": "Mogappair (Golden Flat)",
    "startingTime": "6:55 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 9",
    "status": "Scheduled",
    "statusDetail": "Mogappair (Golden Flat) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n09a.php",
    "stops": [
      {
        "name": "Mogappair (Golden Flat)",
        "time": "6:55 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Mogappair (Golden Flat) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 9"
      }
    ]
  },
  {
    "id": "bus-9b",
    "sno": 25,
    "busNumber": "9B",
    "routeNumber": "9B",
    "routeName": "Mogappair to REC Campus",
    "destination": "Mogappair",
    "startingPoint": "Mogappair",
    "startingTime": "6:45 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 9",
    "status": "Scheduled",
    "statusDetail": "Mogappair transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n09b.php",
    "stops": [
      {
        "name": "Mogappair",
        "time": "6:45 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Mogappair Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 9"
      }
    ]
  },
  {
    "id": "bus-9c",
    "sno": 26,
    "busNumber": "9C",
    "routeNumber": "9C",
    "routeName": "Mogappair west to REC Campus",
    "destination": "Mogappair west",
    "startingPoint": "Mogappair west",
    "startingTime": "6:50 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 9",
    "status": "Scheduled",
    "statusDetail": "Mogappair west transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n09c.php",
    "stops": [
      {
        "name": "Mogappair west",
        "time": "6:50 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Mogappair west Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 9"
      }
    ]
  },
  {
    "id": "bus-10",
    "sno": 27,
    "busNumber": "10",
    "routeNumber": "10",
    "routeName": "Vyasarpadi (Erikarai) to REC Campus",
    "destination": "Vyasarpadi (Erikarai)",
    "startingPoint": "Vyasarpadi (Erikarai)",
    "startingTime": "6:10 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 10",
    "status": "Scheduled",
    "statusDetail": "Vyasarpadi (Erikarai) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n10.php",
    "stops": [
      {
        "name": "Vyasarpadi (Erikarai)",
        "time": "6:10 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Vyasarpadi (Erikarai) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 10"
      }
    ]
  },
  {
    "id": "bus-10b",
    "sno": 28,
    "busNumber": "10B",
    "routeNumber": "10B",
    "routeName": "ICF to REC Campus",
    "destination": "ICF",
    "startingPoint": "ICF",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 10",
    "status": "Scheduled",
    "statusDetail": "ICF transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n10b.php",
    "stops": [
      {
        "name": "ICF",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "ICF Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 10"
      }
    ]
  },
  {
    "id": "bus-10c",
    "sno": 29,
    "busNumber": "10C",
    "routeNumber": "10C",
    "routeName": "Binny Mill Church to REC Campus",
    "destination": "Binny Mill Church",
    "startingPoint": "Binny Mill Church",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 10",
    "status": "Scheduled",
    "statusDetail": "Binny Mill Church transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n10c.php",
    "stops": [
      {
        "name": "Binny Mill Church",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Binny Mill Church Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 10"
      }
    ]
  },
  {
    "id": "bus-11",
    "sno": 30,
    "busNumber": "11",
    "routeNumber": "11",
    "routeName": "Moolakadai to REC Campus",
    "destination": "Moolakadai",
    "startingPoint": "Moolakadai",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 11",
    "status": "On Route",
    "statusDetail": "Moolakadai transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n11.php",
    "stops": [
      {
        "name": "Moolakadai",
        "time": "6:15 AM",
        "landmark": "Bus Depot"
      },
      {
        "name": "Madhavaram Roundana",
        "time": "6:20 AM",
        "landmark": "Signal"
      },
      {
        "name": "Retteri Junction",
        "time": "6:28 AM",
        "landmark": "Flyover Junction"
      },
      {
        "name": "Telephone Exchange",
        "time": "6:35 AM",
        "landmark": "BSNL Office"
      },
      {
        "name": "Pattaravakkam",
        "time": "6:42 AM",
        "landmark": "Railway Gate"
      },
      {
        "name": "Korattur",
        "time": "6:50 AM",
        "landmark": "Bus Stop"
      },
      {
        "name": "Poonamallee Bypass",
        "time": "7:20 AM",
        "landmark": "Tollgate"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Main Gate Bay 11"
      }
    ]
  },
  {
    "id": "bus-11a",
    "sno": 31,
    "busNumber": "11A",
    "routeNumber": "11A",
    "routeName": "Retteri (RTO Office) to REC Campus",
    "destination": "Retteri (RTO Office)",
    "startingPoint": "Retteri (RTO Office)",
    "startingTime": "6:35 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 11",
    "status": "Scheduled",
    "statusDetail": "Retteri (RTO Office) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n11a.php",
    "stops": [
      {
        "name": "Retteri (RTO Office)",
        "time": "6:35 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Retteri (RTO Office) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 11"
      }
    ]
  },
  {
    "id": "bus-11c",
    "sno": 32,
    "busNumber": "11C",
    "routeNumber": "11C",
    "routeName": "Korattur to REC Campus",
    "destination": "Korattur",
    "startingPoint": "Korattur",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 11",
    "status": "Scheduled",
    "statusDetail": "Korattur transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n11c.php",
    "stops": [
      {
        "name": "Korattur",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Korattur Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 11"
      }
    ]
  },
  {
    "id": "bus-12",
    "sno": 33,
    "busNumber": "12",
    "routeNumber": "12",
    "routeName": "MKB Nagar to REC Campus",
    "destination": "MKB Nagar",
    "startingPoint": "MKB Nagar",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 12",
    "status": "Scheduled",
    "statusDetail": "MKB Nagar transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n12.php",
    "stops": [
      {
        "name": "MKB Nagar",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "MKB Nagar Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 12"
      }
    ]
  },
  {
    "id": "bus-12a",
    "sno": 34,
    "busNumber": "12A",
    "routeNumber": "12A",
    "routeName": "Venus to REC Campus",
    "destination": "Venus",
    "startingPoint": "Venus",
    "startingTime": "6:25 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 12",
    "status": "Scheduled",
    "statusDetail": "Venus transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n12a.php",
    "stops": [
      {
        "name": "Venus",
        "time": "6:25 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Venus Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 12"
      }
    ]
  },
  {
    "id": "bus-12b",
    "sno": 35,
    "busNumber": "12B",
    "routeNumber": "12B",
    "routeName": "Kolathur to REC Campus",
    "destination": "Kolathur",
    "startingPoint": "Kolathur",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 12",
    "status": "Scheduled",
    "statusDetail": "Kolathur transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n12b.php",
    "stops": [
      {
        "name": "Kolathur",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Kolathur Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 12"
      }
    ]
  },
  {
    "id": "bus-12c",
    "sno": 36,
    "busNumber": "12C",
    "routeNumber": "12C",
    "routeName": "Perambur to REC Campus",
    "destination": "Perambur",
    "startingPoint": "Perambur",
    "startingTime": "6:10 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 12",
    "status": "Scheduled",
    "statusDetail": "Perambur transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n12c.php",
    "stops": [
      {
        "name": "Perambur",
        "time": "6:10 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Perambur Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 12"
      }
    ]
  },
  {
    "id": "bus-13",
    "sno": 37,
    "busNumber": "13",
    "routeNumber": "13",
    "routeName": "Peravallur to REC Campus",
    "destination": "Peravallur",
    "startingPoint": "Peravallur",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 13",
    "status": "Scheduled",
    "statusDetail": "Peravallur transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n13.php",
    "stops": [
      {
        "name": "Peravallur",
        "time": "6:20 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Peravallur Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 13"
      }
    ]
  },
  {
    "id": "bus-13a",
    "sno": 38,
    "busNumber": "13A",
    "routeNumber": "13A",
    "routeName": "Kolathur (Don Bosco School) to REC Campus",
    "destination": "Kolathur (Don Bosco School)",
    "startingPoint": "Kolathur (Don Bosco School)",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 13",
    "status": "Scheduled",
    "statusDetail": "Kolathur (Don Bosco School) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n13a.php",
    "stops": [
      {
        "name": "Kolathur (Don Bosco School)",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Kolathur (Don Bosco School) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 13"
      }
    ]
  },
  {
    "id": "bus-13b",
    "sno": 39,
    "busNumber": "13B",
    "routeNumber": "13B",
    "routeName": "T.V.K Nagar to REC Campus",
    "destination": "T.V.K Nagar",
    "startingPoint": "T.V.K Nagar",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 13",
    "status": "Scheduled",
    "statusDetail": "T.V.K Nagar transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n13b.php",
    "stops": [
      {
        "name": "T.V.K Nagar",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "T.V.K Nagar Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 13"
      }
    ]
  },
  {
    "id": "bus-13c",
    "sno": 40,
    "busNumber": "13C",
    "routeNumber": "13C",
    "routeName": "Poombukar Nagar to REC Campus",
    "destination": "Poombukar Nagar",
    "startingPoint": "Poombukar Nagar",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 13",
    "status": "Scheduled",
    "statusDetail": "Poombukar Nagar transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n13c.php",
    "stops": [
      {
        "name": "Poombukar Nagar",
        "time": "6:20 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Poombukar Nagar Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 13"
      }
    ]
  },
  {
    "id": "bus-13d",
    "sno": 41,
    "busNumber": "13D",
    "routeNumber": "13D",
    "routeName": "Temple School to REC Campus",
    "destination": "Temple School",
    "startingPoint": "Temple School",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 13",
    "status": "Scheduled",
    "statusDetail": "Temple School transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n13d.php",
    "stops": [
      {
        "name": "Temple School",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Temple School Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 13"
      }
    ]
  },
  {
    "id": "bus-14",
    "sno": 42,
    "busNumber": "14",
    "routeNumber": "14",
    "routeName": "Manali to REC Campus",
    "destination": "Manali",
    "startingPoint": "Manali",
    "startingTime": "6:10 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 14",
    "status": "Scheduled",
    "statusDetail": "Manali transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n14.php",
    "stops": [
      {
        "name": "Manali",
        "time": "6:10 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Manali Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 14"
      }
    ]
  },
  {
    "id": "bus-14c",
    "sno": 43,
    "busNumber": "14C",
    "routeNumber": "14C",
    "routeName": "Veterinary college (mathur) to REC Campus",
    "destination": "Veterinary college (mathur)",
    "startingPoint": "Veterinary college (mathur)",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 14",
    "status": "Scheduled",
    "statusDetail": "Veterinary college (mathur) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n14c.php",
    "stops": [
      {
        "name": "Veterinary college (mathur)",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Veterinary college (mathur) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 14"
      }
    ]
  },
  {
    "id": "bus-15",
    "sno": 44,
    "busNumber": "15",
    "routeNumber": "15",
    "routeName": "Ayappakkam to REC Campus",
    "destination": "Ayappakkam",
    "startingPoint": "Ayappakkam",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 15",
    "status": "Scheduled",
    "statusDetail": "Ayappakkam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n15.php",
    "stops": [
      {
        "name": "Ayappakkam",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Ayappakkam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 15"
      }
    ]
  },
  {
    "id": "bus-15a",
    "sno": 45,
    "busNumber": "15A",
    "routeNumber": "15A",
    "routeName": "Ayappakkam Water Tank to REC Campus",
    "destination": "Ayappakkam Water Tank",
    "startingPoint": "Ayappakkam Water Tank",
    "startingTime": "6:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 15",
    "status": "Scheduled",
    "statusDetail": "Ayappakkam Water Tank transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n15a.php",
    "stops": [
      {
        "name": "Ayappakkam Water Tank",
        "time": "6:40 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Ayappakkam Water Tank Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 15"
      }
    ]
  },
  {
    "id": "bus-15b",
    "sno": 46,
    "busNumber": "15B",
    "routeNumber": "15B",
    "routeName": "Thirumullaivoyal to REC Campus",
    "destination": "Thirumullaivoyal",
    "startingPoint": "Thirumullaivoyal",
    "startingTime": "6:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 15",
    "status": "Scheduled",
    "statusDetail": "Thirumullaivoyal transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n15b.php",
    "stops": [
      {
        "name": "Thirumullaivoyal",
        "time": "6:40 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Thirumullaivoyal Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 15"
      }
    ]
  },
  {
    "id": "bus-15c",
    "sno": 47,
    "busNumber": "15C",
    "routeNumber": "15C",
    "routeName": "Ambattur OT to REC Campus",
    "destination": "Ambattur OT",
    "startingPoint": "Ambattur OT",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 15",
    "status": "Scheduled",
    "statusDetail": "Ambattur OT transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n15c.php",
    "stops": [
      {
        "name": "Ambattur OT",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Ambattur OT Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 15"
      }
    ]
  },
  {
    "id": "bus-15d",
    "sno": 48,
    "busNumber": "15D",
    "routeNumber": "15D",
    "routeName": "Ayappakkam (Pillaiyar kovil) to REC Campus",
    "destination": "Ayappakkam (Pillaiyar kovil)",
    "startingPoint": "Ayappakkam (Pillaiyar kovil)",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 15",
    "status": "Scheduled",
    "statusDetail": "Ayappakkam (Pillaiyar kovil) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n15d.php",
    "stops": [
      {
        "name": "Ayappakkam (Pillaiyar kovil)",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Ayappakkam (Pillaiyar kovil) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 15"
      }
    ]
  },
  {
    "id": "bus-15e",
    "sno": 49,
    "busNumber": "15E",
    "routeNumber": "15E",
    "routeName": "Vinayagapuram to REC Campus",
    "destination": "Vinayagapuram",
    "startingPoint": "Vinayagapuram",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 15",
    "status": "Scheduled",
    "statusDetail": "Vinayagapuram transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n15e.php",
    "stops": [
      {
        "name": "Vinayagapuram",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Vinayagapuram Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 15"
      }
    ]
  },
  {
    "id": "bus-15f",
    "sno": 50,
    "busNumber": "15F",
    "routeNumber": "15F",
    "routeName": "Dunlop to REC Campus",
    "destination": "Dunlop",
    "startingPoint": "Dunlop",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 15",
    "status": "Scheduled",
    "statusDetail": "Dunlop transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n15f.php",
    "stops": [
      {
        "name": "Dunlop",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Dunlop Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 15"
      }
    ]
  },
  {
    "id": "bus-16",
    "sno": 51,
    "busNumber": "16",
    "routeNumber": "16",
    "routeName": "Redhills to REC Campus",
    "destination": "Redhills",
    "startingPoint": "Redhills",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 16",
    "status": "Scheduled",
    "statusDetail": "Redhills transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n16.php",
    "stops": [
      {
        "name": "Redhills",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Redhills Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 16"
      }
    ]
  },
  {
    "id": "bus-16a",
    "sno": 52,
    "busNumber": "16A",
    "routeNumber": "16A",
    "routeName": "Kallikuppam to REC Campus",
    "destination": "Kallikuppam",
    "startingPoint": "Kallikuppam",
    "startingTime": "6:25 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 16",
    "status": "Scheduled",
    "statusDetail": "Kallikuppam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n16a.php",
    "stops": [
      {
        "name": "Kallikuppam",
        "time": "6:25 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Kallikuppam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 16"
      }
    ]
  },
  {
    "id": "bus-16b",
    "sno": 53,
    "busNumber": "16B",
    "routeNumber": "16B",
    "routeName": "Puzhal to REC Campus",
    "destination": "Puzhal",
    "startingPoint": "Puzhal",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 16",
    "status": "Scheduled",
    "statusDetail": "Puzhal transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n16b.php",
    "stops": [
      {
        "name": "Puzhal",
        "time": "6:20 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Puzhal Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 16"
      }
    ]
  },
  {
    "id": "bus-16c",
    "sno": 54,
    "busNumber": "16C",
    "routeNumber": "16C",
    "routeName": "Puzhal Bypass to REC Campus",
    "destination": "Puzhal Bypass",
    "startingPoint": "Puzhal Bypass",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 16",
    "status": "Scheduled",
    "statusDetail": "Puzhal Bypass transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n16c.php",
    "stops": [
      {
        "name": "Puzhal Bypass",
        "time": "6:20 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Puzhal Bypass Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 16"
      }
    ]
  },
  {
    "id": "bus-16d",
    "sno": 55,
    "busNumber": "16D",
    "routeNumber": "16D",
    "routeName": "Gandhinagar Police Booth (Redhills) to REC Campus",
    "destination": "Gandhinagar Police Booth (Redhills)",
    "startingPoint": "Gandhinagar Police Booth (Redhills)",
    "startingTime": "6:00 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 16",
    "status": "Scheduled",
    "statusDetail": "Gandhinagar Police Booth (Redhills) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n16d.php",
    "stops": [
      {
        "name": "Gandhinagar Police Booth (Redhills)",
        "time": "6:00 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Gandhinagar Police Booth (Redhills) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 16"
      }
    ]
  },
  {
    "id": "bus-16e",
    "sno": 56,
    "busNumber": "16E",
    "routeNumber": "16E",
    "routeName": "Oragadam (Ambattur) to REC Campus",
    "destination": "Oragadam (Ambattur)",
    "startingPoint": "Oragadam (Ambattur)",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 16",
    "status": "Scheduled",
    "statusDetail": "Oragadam (Ambattur) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n16e.php",
    "stops": [
      {
        "name": "Oragadam (Ambattur)",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Oragadam (Ambattur) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 16"
      }
    ]
  },
  {
    "id": "bus-17",
    "sno": 57,
    "busNumber": "17",
    "routeNumber": "17",
    "routeName": "Thiruvallur to REC Campus",
    "destination": "Thiruvallur",
    "startingPoint": "Thiruvallur",
    "startingTime": "6:45 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 17",
    "status": "Scheduled",
    "statusDetail": "Thiruvallur transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n17.php",
    "stops": [
      {
        "name": "Thiruvallur",
        "time": "6:45 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Thiruvallur Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 17"
      }
    ]
  },
  {
    "id": "bus-17a",
    "sno": 58,
    "busNumber": "17A",
    "routeNumber": "17A",
    "routeName": "Veppampattu (Kandhan Kollai) to REC Campus",
    "destination": "Veppampattu (Kandhan Kollai)",
    "startingPoint": "Veppampattu (Kandhan Kollai)",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 17",
    "status": "Scheduled",
    "statusDetail": "Veppampattu (Kandhan Kollai) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n17a.php",
    "stops": [
      {
        "name": "Veppampattu (Kandhan Kollai)",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Veppampattu (Kandhan Kollai) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 17"
      }
    ]
  },
  {
    "id": "bus-17b",
    "sno": 59,
    "busNumber": "17B",
    "routeNumber": "17B",
    "routeName": "Thiruvallur (Vasantha Bhavan) to REC Campus",
    "destination": "Thiruvallur (Vasantha Bhavan)",
    "startingPoint": "Thiruvallur (Vasantha Bhavan)",
    "startingTime": "6:45 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 17",
    "status": "Scheduled",
    "statusDetail": "Thiruvallur (Vasantha Bhavan) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n17b.php",
    "stops": [
      {
        "name": "Thiruvallur (Vasantha Bhavan)",
        "time": "6:45 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Thiruvallur (Vasantha Bhavan) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 17"
      }
    ]
  },
  {
    "id": "bus-17c",
    "sno": 60,
    "busNumber": "17C",
    "routeNumber": "17C",
    "routeName": "Sevvapet to REC Campus",
    "destination": "Sevvapet",
    "startingPoint": "Sevvapet",
    "startingTime": "6:35 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 17",
    "status": "Scheduled",
    "statusDetail": "Sevvapet transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n17c.php",
    "stops": [
      {
        "name": "Sevvapet",
        "time": "6:35 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Sevvapet Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 17"
      }
    ]
  },
  {
    "id": "bus-17d",
    "sno": 61,
    "busNumber": "17D",
    "routeNumber": "17D",
    "routeName": "Veppampattu to REC Campus",
    "destination": "Veppampattu",
    "startingPoint": "Veppampattu",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 17",
    "status": "Scheduled",
    "statusDetail": "Veppampattu transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n17d.php",
    "stops": [
      {
        "name": "Veppampattu",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Veppampattu Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 17"
      }
    ]
  },
  {
    "id": "bus-17e",
    "sno": 62,
    "busNumber": "17E",
    "routeNumber": "17E",
    "routeName": "Nemilichery Roundana to REC Campus",
    "destination": "Nemilichery Roundana",
    "startingPoint": "Nemilichery Roundana",
    "startingTime": "6:35 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 17",
    "status": "Scheduled",
    "statusDetail": "Nemilichery Roundana transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n17e.php",
    "stops": [
      {
        "name": "Nemilichery Roundana",
        "time": "6:35 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Nemilichery Roundana Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 17"
      }
    ]
  },
  {
    "id": "bus-17f",
    "sno": 63,
    "busNumber": "17F",
    "routeNumber": "17F",
    "routeName": "Thiruvallur (New Bus Stand) to REC Campus",
    "destination": "Thiruvallur (New Bus Stand)",
    "startingPoint": "Thiruvallur (New Bus Stand)",
    "startingTime": "6:45 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 17",
    "status": "Scheduled",
    "statusDetail": "Thiruvallur (New Bus Stand) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n17f.php",
    "stops": [
      {
        "name": "Thiruvallur (New Bus Stand)",
        "time": "6:45 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Thiruvallur (New Bus Stand) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 17"
      }
    ]
  },
  {
    "id": "bus-17g",
    "sno": 64,
    "busNumber": "17G",
    "routeNumber": "17G",
    "routeName": "Thiruvallur (Oil Mill) to REC Campus",
    "destination": "Thiruvallur (Oil Mill)",
    "startingPoint": "Thiruvallur (Oil Mill)",
    "startingTime": "6:45 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 17",
    "status": "Scheduled",
    "statusDetail": "Thiruvallur (Oil Mill) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n17g.php",
    "stops": [
      {
        "name": "Thiruvallur (Oil Mill)",
        "time": "6:45 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Thiruvallur (Oil Mill) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 17"
      }
    ]
  },
  {
    "id": "bus-18",
    "sno": 65,
    "busNumber": "18",
    "routeNumber": "18",
    "routeName": "Avadi to REC Campus",
    "destination": "Avadi",
    "startingPoint": "Avadi",
    "startingTime": "6:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 18",
    "status": "Boarding Soon",
    "statusDetail": "Avadi transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n18.php",
    "stops": [
      {
        "name": "Avadi Market",
        "time": "6:40 AM",
        "landmark": "Opp. Bus Stand"
      },
      {
        "name": "Avadi Check Post",
        "time": "6:45 AM",
        "landmark": "Check Post"
      },
      {
        "name": "Ambattur OT",
        "time": "6:52 AM",
        "landmark": "OT Bus Stand"
      },
      {
        "name": "Stedford Hospital",
        "time": "6:58 AM",
        "landmark": "Hospital Gate"
      },
      {
        "name": "Kumananchavadi",
        "time": "7:18 AM",
        "landmark": "Signal"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 18"
      }
    ]
  },
  {
    "id": "bus-18a",
    "sno": 66,
    "busNumber": "18A",
    "routeNumber": "18A",
    "routeName": "Ambattur Stedford Hospital to REC Campus",
    "destination": "Ambattur Stedford Hospital",
    "startingPoint": "Ambattur Stedford Hospital",
    "startingTime": "6:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 18",
    "status": "Scheduled",
    "statusDetail": "Ambattur Stedford Hospital transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n18a.php",
    "stops": [
      {
        "name": "Ambattur Stedford Hospital",
        "time": "6:40 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Ambattur Stedford Hospital Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 18"
      }
    ]
  },
  {
    "id": "bus-18b",
    "sno": 67,
    "busNumber": "18B",
    "routeNumber": "18B",
    "routeName": "Avadi (GRT) to REC Campus",
    "destination": "Avadi (GRT)",
    "startingPoint": "Avadi (GRT)",
    "startingTime": "6:45 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 18",
    "status": "Scheduled",
    "statusDetail": "Avadi (GRT) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n18b.php",
    "stops": [
      {
        "name": "Avadi (GRT)",
        "time": "6:45 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Avadi (GRT) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 18"
      }
    ]
  },
  {
    "id": "bus-18c",
    "sno": 68,
    "busNumber": "18C",
    "routeNumber": "18C",
    "routeName": "Avadi Market to REC Campus",
    "destination": "Avadi Market",
    "startingPoint": "Avadi Market",
    "startingTime": "6:45 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 18",
    "status": "Scheduled",
    "statusDetail": "Avadi Market transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n18c.php",
    "stops": [
      {
        "name": "Avadi Market",
        "time": "6:45 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Avadi Market Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 18"
      }
    ]
  },
  {
    "id": "bus-18d",
    "sno": 69,
    "busNumber": "18D",
    "routeNumber": "18D",
    "routeName": "Kollumedu (GH) to REC Campus",
    "destination": "Kollumedu (GH)",
    "startingPoint": "Kollumedu (GH)",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 18",
    "status": "Scheduled",
    "statusDetail": "Kollumedu (GH) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n18d.php",
    "stops": [
      {
        "name": "Kollumedu (GH)",
        "time": "6:20 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Kollumedu (GH) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 18"
      }
    ]
  },
  {
    "id": "bus-18e",
    "sno": 70,
    "busNumber": "18E",
    "routeNumber": "18E",
    "routeName": "Vel Tech junction to REC Campus",
    "destination": "Vel Tech junction",
    "startingPoint": "Vel Tech junction",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 18",
    "status": "Scheduled",
    "statusDetail": "Vel Tech junction transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n18e.php",
    "stops": [
      {
        "name": "Vel Tech junction",
        "time": "6:20 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Vel Tech junction Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 18"
      }
    ]
  },
  {
    "id": "bus-18f",
    "sno": 71,
    "busNumber": "18F",
    "routeNumber": "18F",
    "routeName": "Avadi Check Post to REC Campus",
    "destination": "Avadi Check Post",
    "startingPoint": "Avadi Check Post",
    "startingTime": "6:45 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 18",
    "status": "Scheduled",
    "statusDetail": "Avadi Check Post transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n18f.php",
    "stops": [
      {
        "name": "Avadi Check Post",
        "time": "6:45 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Avadi Check Post Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 18"
      }
    ]
  },
  {
    "id": "bus-19",
    "sno": 72,
    "busNumber": "19",
    "routeNumber": "19",
    "routeName": "SP Kovil to REC Campus",
    "destination": "SP Kovil",
    "startingPoint": "SP Kovil",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 19",
    "status": "On Route",
    "statusDetail": "SP Kovil transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n19.php",
    "stops": [
      {
        "name": "SP Kovil",
        "time": "6:30 AM",
        "landmark": "Railway Station Arch"
      },
      {
        "name": "Maraimalai Nagar",
        "time": "6:35 AM",
        "landmark": "Municipality Office"
      },
      {
        "name": "Guduvanchery",
        "time": "6:42 AM",
        "landmark": "Bus Stop"
      },
      {
        "name": "Vandalur Zoo",
        "time": "6:50 AM",
        "landmark": "Crescent College Stop"
      },
      {
        "name": "Perungalathur",
        "time": "6:58 AM",
        "landmark": "Kamatchi Nagar"
      },
      {
        "name": "Mudichur Road",
        "time": "7:10 AM",
        "landmark": "Old Toll"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:50 AM",
        "landmark": "Bay 19"
      }
    ]
  },
  {
    "id": "bus-19a",
    "sno": 73,
    "busNumber": "19A",
    "routeNumber": "19A",
    "routeName": "Perungalathur to REC Campus",
    "destination": "Perungalathur",
    "startingPoint": "Perungalathur",
    "startingTime": "6:35 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 19",
    "status": "Scheduled",
    "statusDetail": "Perungalathur transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n19a.php",
    "stops": [
      {
        "name": "Perungalathur",
        "time": "6:35 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Perungalathur Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 19"
      }
    ]
  },
  {
    "id": "bus-19b",
    "sno": 74,
    "busNumber": "19B",
    "routeNumber": "19B",
    "routeName": "Varatharaja Theatre to REC Campus",
    "destination": "Varatharaja Theatre",
    "startingPoint": "Varatharaja Theatre",
    "startingTime": "6:35 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 19",
    "status": "Scheduled",
    "statusDetail": "Varatharaja Theatre transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n19b.php",
    "stops": [
      {
        "name": "Varatharaja Theatre",
        "time": "6:35 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Varatharaja Theatre Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 19"
      }
    ]
  },
  {
    "id": "bus-19c",
    "sno": 75,
    "busNumber": "19C",
    "routeNumber": "19C",
    "routeName": "Hasthinapuram to REC Campus",
    "destination": "Hasthinapuram",
    "startingPoint": "Hasthinapuram",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 19",
    "status": "Scheduled",
    "statusDetail": "Hasthinapuram transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n19c.php",
    "stops": [
      {
        "name": "Hasthinapuram",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Hasthinapuram Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 19"
      }
    ]
  },
  {
    "id": "bus-19d",
    "sno": 76,
    "busNumber": "19D",
    "routeNumber": "19D",
    "routeName": "Urapakkam to REC Campus",
    "destination": "Urapakkam",
    "startingPoint": "Urapakkam",
    "startingTime": "6:35 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 19",
    "status": "Scheduled",
    "statusDetail": "Urapakkam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n19d.php",
    "stops": [
      {
        "name": "Urapakkam",
        "time": "6:35 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Urapakkam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 19"
      }
    ]
  },
  {
    "id": "bus-19e",
    "sno": 77,
    "busNumber": "19E",
    "routeNumber": "19E",
    "routeName": "Tambaram (MCC) to REC Campus",
    "destination": "Tambaram (MCC)",
    "startingPoint": "Tambaram (MCC)",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 19",
    "status": "Scheduled",
    "statusDetail": "Tambaram (MCC) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n19e.php",
    "stops": [
      {
        "name": "Tambaram (MCC)",
        "time": "6:20 AM",
        "landmark": "MCC College Gate"
      },
      {
        "name": "Tambaram Sanatorium",
        "time": "6:28 AM",
        "landmark": "MEPZ Main Gate"
      },
      {
        "name": "Chrompet",
        "time": "6:35 AM",
        "landmark": "MIT Bridge"
      },
      {
        "name": "Pallavaram",
        "time": "6:42 AM",
        "landmark": "Bus Stand"
      },
      {
        "name": "Poonamallee",
        "time": "7:15 AM",
        "landmark": "Trunk Road"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 20"
      }
    ]
  },
  {
    "id": "bus-19f",
    "sno": 78,
    "busNumber": "19F",
    "routeNumber": "19F",
    "routeName": "Maraimalai Nagar to REC Campus",
    "destination": "Maraimalai Nagar",
    "startingPoint": "Maraimalai Nagar",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 19",
    "status": "Scheduled",
    "statusDetail": "Maraimalai Nagar transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n19f.php",
    "stops": [
      {
        "name": "Maraimalai Nagar",
        "time": "6:20 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Maraimalai Nagar Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 19"
      }
    ]
  },
  {
    "id": "bus-20",
    "sno": 79,
    "busNumber": "20",
    "routeNumber": "20",
    "routeName": "Kamatchi Hospital (Pallikaranai) to REC Campus",
    "destination": "Kamatchi Hospital (Pallikaranai)",
    "startingPoint": "Kamatchi Hospital (Pallikaranai)",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 20",
    "status": "Scheduled",
    "statusDetail": "Kamatchi Hospital (Pallikaranai) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n20.php",
    "stops": [
      {
        "name": "Kamatchi Hospital (Pallikaranai)",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Kamatchi Hospital (Pallikaranai) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 20"
      }
    ]
  },
  {
    "id": "bus-20a",
    "sno": 80,
    "busNumber": "20A",
    "routeNumber": "20A",
    "routeName": "Sembakkam to REC Campus",
    "destination": "Sembakkam",
    "startingPoint": "Sembakkam",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 20",
    "status": "Scheduled",
    "statusDetail": "Sembakkam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n20a.php",
    "stops": [
      {
        "name": "Sembakkam",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Sembakkam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 20"
      }
    ]
  },
  {
    "id": "bus-20b",
    "sno": 81,
    "busNumber": "20B",
    "routeNumber": "20B",
    "routeName": "Mambakkam to REC Campus",
    "destination": "Mambakkam",
    "startingPoint": "Mambakkam",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 20",
    "status": "Scheduled",
    "statusDetail": "Mambakkam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n20b.php",
    "stops": [
      {
        "name": "Mambakkam",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Mambakkam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 20"
      }
    ]
  },
  {
    "id": "bus-20c",
    "sno": 82,
    "busNumber": "20C",
    "routeNumber": "20C",
    "routeName": "Madipakkam to REC Campus",
    "destination": "Madipakkam",
    "startingPoint": "Madipakkam",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 20",
    "status": "Scheduled",
    "statusDetail": "Madipakkam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n20c.php",
    "stops": [
      {
        "name": "Madipakkam",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Madipakkam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 20"
      }
    ]
  },
  {
    "id": "bus-20d",
    "sno": 83,
    "busNumber": "20D",
    "routeNumber": "20D",
    "routeName": "Nanmangalam to REC Campus",
    "destination": "Nanmangalam",
    "startingPoint": "Nanmangalam",
    "startingTime": "6:25 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 20",
    "status": "Scheduled",
    "statusDetail": "Nanmangalam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n20d.php",
    "stops": [
      {
        "name": "Nanmangalam",
        "time": "6:25 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Nanmangalam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 20"
      }
    ]
  },
  {
    "id": "bus-20e",
    "sno": 84,
    "busNumber": "20E",
    "routeNumber": "20E",
    "routeName": "Chrompet to REC Campus",
    "destination": "Chrompet",
    "startingPoint": "Chrompet",
    "startingTime": "6:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 20",
    "status": "Scheduled",
    "statusDetail": "Chrompet transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n20e.php",
    "stops": [
      {
        "name": "Chrompet",
        "time": "6:40 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Chrompet Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 20"
      }
    ]
  },
  {
    "id": "bus-20f",
    "sno": 85,
    "busNumber": "20F",
    "routeNumber": "20F",
    "routeName": "Bharath University to REC Campus",
    "destination": "Bharath University",
    "startingPoint": "Bharath University",
    "startingTime": "6:35 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 20",
    "status": "Scheduled",
    "statusDetail": "Bharath University transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n20f.php",
    "stops": [
      {
        "name": "Bharath University",
        "time": "6:35 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Bharath University Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 20"
      }
    ]
  },
  {
    "id": "bus-20g",
    "sno": 86,
    "busNumber": "20G",
    "routeNumber": "20G",
    "routeName": "Sembakkam to REC Campus",
    "destination": "Sembakkam",
    "startingPoint": "Sembakkam",
    "startingTime": "6:35 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 20",
    "status": "Scheduled",
    "statusDetail": "Sembakkam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n20g.php",
    "stops": [
      {
        "name": "Sembakkam",
        "time": "6:35 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Sembakkam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 20"
      }
    ]
  },
  {
    "id": "bus-20h",
    "sno": 87,
    "busNumber": "20H",
    "routeNumber": "20H",
    "routeName": "Sanatorium to REC Campus",
    "destination": "Sanatorium",
    "startingPoint": "Sanatorium",
    "startingTime": "6:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 20",
    "status": "Scheduled",
    "statusDetail": "Sanatorium transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n20h.php",
    "stops": [
      {
        "name": "Sanatorium",
        "time": "6:40 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Sanatorium Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 20"
      }
    ]
  },
  {
    "id": "bus-21",
    "sno": 88,
    "busNumber": "21",
    "routeNumber": "21",
    "routeName": "NGO Colony to REC Campus",
    "destination": "NGO Colony",
    "startingPoint": "NGO Colony",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 21",
    "status": "Boarding Soon",
    "statusDetail": "NGO Colony transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n21.php",
    "stops": [
      {
        "name": "NGO Colony",
        "time": "6:20 AM",
        "landmark": "Bus Terminus"
      },
      {
        "name": "Velachery",
        "time": "6:28 AM",
        "landmark": "Checkpost"
      },
      {
        "name": "Adambakkam",
        "time": "6:36 AM",
        "landmark": "Karuneegar Street"
      },
      {
        "name": "Guindy",
        "time": "6:45 AM",
        "landmark": "Kathipara Flyover"
      },
      {
        "name": "Porur Toll Plaza",
        "time": "7:15 AM",
        "landmark": "Chennai Bypass"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:50 AM",
        "landmark": "Bay 21"
      }
    ]
  },
  {
    "id": "bus-21a",
    "sno": 89,
    "busNumber": "21A",
    "routeNumber": "21A",
    "routeName": "Velachery to REC Campus",
    "destination": "Velachery",
    "startingPoint": "Velachery",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 21",
    "status": "Scheduled",
    "statusDetail": "Velachery transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n21a.php",
    "stops": [
      {
        "name": "Velachery",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Velachery Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 21"
      }
    ]
  },
  {
    "id": "bus-21c",
    "sno": 90,
    "busNumber": "21C",
    "routeNumber": "21C",
    "routeName": "Adambakkam to REC Campus",
    "destination": "Adambakkam",
    "startingPoint": "Adambakkam",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 21",
    "status": "Scheduled",
    "statusDetail": "Adambakkam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n21c.php",
    "stops": [
      {
        "name": "Adambakkam",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Adambakkam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 21"
      }
    ]
  },
  {
    "id": "bus-22",
    "sno": 91,
    "busNumber": "22",
    "routeNumber": "22",
    "routeName": "Sholinganallur (OMR) to REC Campus",
    "destination": "Sholinganallur (OMR)",
    "startingPoint": "Sholinganallur (OMR)",
    "startingTime": "5:50 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 22",
    "status": "Scheduled",
    "statusDetail": "Sholinganallur (OMR) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n22.php",
    "stops": [
      {
        "name": "Sholinganallur (OMR)",
        "time": "5:50 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Sholinganallur (OMR) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 22"
      }
    ]
  },
  {
    "id": "bus-23",
    "sno": 92,
    "busNumber": "23",
    "routeNumber": "23",
    "routeName": "Kovilampakkam to REC Campus",
    "destination": "Kovilampakkam",
    "startingPoint": "Kovilampakkam",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 23",
    "status": "Scheduled",
    "statusDetail": "Kovilampakkam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n23.php",
    "stops": [
      {
        "name": "Kovilampakkam",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Kovilampakkam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 23"
      }
    ]
  },
  {
    "id": "bus-23c",
    "sno": 93,
    "busNumber": "23C",
    "routeNumber": "23C",
    "routeName": "Keelkatalai to REC Campus",
    "destination": "Keelkatalai",
    "startingPoint": "Keelkatalai",
    "startingTime": "6:25 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 23",
    "status": "Scheduled",
    "statusDetail": "Keelkatalai transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n23c.php",
    "stops": [
      {
        "name": "Keelkatalai",
        "time": "6:25 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Keelkatalai Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 23"
      }
    ]
  },
  {
    "id": "bus-24",
    "sno": 94,
    "busNumber": "24",
    "routeNumber": "24",
    "routeName": "Nanganallur to REC Campus",
    "destination": "Nanganallur",
    "startingPoint": "Nanganallur",
    "startingTime": "6:25 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 24",
    "status": "Scheduled",
    "statusDetail": "Nanganallur transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n24.php",
    "stops": [
      {
        "name": "Nanganallur",
        "time": "6:25 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Nanganallur Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 24"
      }
    ]
  },
  {
    "id": "bus-24c",
    "sno": 95,
    "busNumber": "24C",
    "routeNumber": "24C",
    "routeName": "Pallavaram Bus stand to REC Campus",
    "destination": "Pallavaram Bus stand",
    "startingPoint": "Pallavaram Bus stand",
    "startingTime": "6:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 24",
    "status": "Scheduled",
    "statusDetail": "Pallavaram Bus stand transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n24c.php",
    "stops": [
      {
        "name": "Pallavaram Bus stand",
        "time": "6:40 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Pallavaram Bus stand Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 24"
      }
    ]
  },
  {
    "id": "bus-25",
    "sno": 96,
    "busNumber": "25",
    "routeNumber": "25",
    "routeName": "VGP (ECR) to REC Campus",
    "destination": "VGP (ECR)",
    "startingPoint": "VGP (ECR)",
    "startingTime": "6:00 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 25",
    "status": "Scheduled",
    "statusDetail": "VGP (ECR) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n25.php",
    "stops": [
      {
        "name": "VGP (ECR)",
        "time": "6:00 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "VGP (ECR) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 25"
      }
    ]
  },
  {
    "id": "bus-25c",
    "sno": 97,
    "busNumber": "25C",
    "routeNumber": "25C",
    "routeName": "Adyar to REC Campus",
    "destination": "Adyar",
    "startingPoint": "Adyar",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 25",
    "status": "Scheduled",
    "statusDetail": "Adyar transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n25c.php",
    "stops": [
      {
        "name": "Adyar",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Adyar Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 25"
      }
    ]
  },
  {
    "id": "bus-26",
    "sno": 98,
    "busNumber": "26",
    "routeNumber": "26",
    "routeName": "Triplicane to REC Campus",
    "destination": "Triplicane",
    "startingPoint": "Triplicane",
    "startingTime": "6:05 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 26",
    "status": "Scheduled",
    "statusDetail": "Triplicane transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n26.php",
    "stops": [
      {
        "name": "Triplicane",
        "time": "6:05 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Triplicane Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 26"
      }
    ]
  },
  {
    "id": "bus-26c",
    "sno": 99,
    "busNumber": "26C",
    "routeNumber": "26C",
    "routeName": "Teynampet to REC Campus",
    "destination": "Teynampet",
    "startingPoint": "Teynampet",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 26",
    "status": "Scheduled",
    "statusDetail": "Teynampet transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n26c.php",
    "stops": [
      {
        "name": "Teynampet",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Teynampet Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 26"
      }
    ]
  },
  {
    "id": "bus-27",
    "sno": 100,
    "busNumber": "27",
    "routeNumber": "27",
    "routeName": "Pattinapakkam (Metro work) to REC Campus",
    "destination": "Pattinapakkam (Metro work)",
    "startingPoint": "Pattinapakkam (Metro work)",
    "startingTime": "6:00 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 27",
    "status": "Scheduled",
    "statusDetail": "Pattinapakkam (Metro work) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n27.php",
    "stops": [
      {
        "name": "Pattinapakkam (Metro work)",
        "time": "6:00 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Pattinapakkam (Metro work) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 27"
      }
    ]
  },
  {
    "id": "bus-27c",
    "sno": 101,
    "busNumber": "27C",
    "routeNumber": "27C",
    "routeName": "Santhome (Light house)(Metro work) to REC Campus",
    "destination": "Santhome (Light house)(Metro work)",
    "startingPoint": "Santhome (Light house)(Metro work)",
    "startingTime": "6:05 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 27",
    "status": "Scheduled",
    "statusDetail": "Santhome (Light house)(Metro work) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n27c.php",
    "stops": [
      {
        "name": "Santhome (Light house)(Metro work)",
        "time": "6:05 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Santhome (Light house)(Metro work) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 27"
      }
    ]
  },
  {
    "id": "bus-28",
    "sno": 102,
    "busNumber": "28",
    "routeNumber": "28",
    "routeName": "Nungambakkam to REC Campus",
    "destination": "Nungambakkam",
    "startingPoint": "Nungambakkam",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 28",
    "status": "Scheduled",
    "statusDetail": "Nungambakkam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n28.php",
    "stops": [
      {
        "name": "Nungambakkam",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Nungambakkam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 28"
      }
    ]
  },
  {
    "id": "bus-28b",
    "sno": 103,
    "busNumber": "28B",
    "routeNumber": "28B",
    "routeName": "Power House to REC Campus",
    "destination": "Power House",
    "startingPoint": "Power House",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 28",
    "status": "Scheduled",
    "statusDetail": "Power House transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n28b.php",
    "stops": [
      {
        "name": "Power House",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Power House Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 28"
      }
    ]
  },
  {
    "id": "bus-28c",
    "sno": 104,
    "busNumber": "28C",
    "routeNumber": "28C",
    "routeName": "Lakshman Sruthi to REC Campus",
    "destination": "Lakshman Sruthi",
    "startingPoint": "Lakshman Sruthi",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 28",
    "status": "Scheduled",
    "statusDetail": "Lakshman Sruthi transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n28c.php",
    "stops": [
      {
        "name": "Lakshman Sruthi",
        "time": "6:20 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Lakshman Sruthi Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 28"
      }
    ]
  },
  {
    "id": "bus-29",
    "sno": 105,
    "busNumber": "29",
    "routeNumber": "29",
    "routeName": "Saligramam to REC Campus",
    "destination": "Saligramam",
    "startingPoint": "Saligramam",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 29",
    "status": "Scheduled",
    "statusDetail": "Saligramam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n29.php",
    "stops": [
      {
        "name": "Saligramam",
        "time": "6:20 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Saligramam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 29"
      }
    ]
  },
  {
    "id": "bus-29c",
    "sno": 106,
    "busNumber": "29C",
    "routeNumber": "29C",
    "routeName": "Alwarthirunagar to REC Campus",
    "destination": "Alwarthirunagar",
    "startingPoint": "Alwarthirunagar",
    "startingTime": "6:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 29",
    "status": "Scheduled",
    "statusDetail": "Alwarthirunagar transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n29c.php",
    "stops": [
      {
        "name": "Alwarthirunagar",
        "time": "6:40 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Alwarthirunagar Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 29"
      }
    ]
  },
  {
    "id": "bus-30",
    "sno": 107,
    "busNumber": "30",
    "routeNumber": "30",
    "routeName": "Chinmaya Nagar to REC Campus",
    "destination": "Chinmaya Nagar",
    "startingPoint": "Chinmaya Nagar",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 30",
    "status": "Scheduled",
    "statusDetail": "Chinmaya Nagar transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n30.php",
    "stops": [
      {
        "name": "Chinmaya Nagar",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Chinmaya Nagar Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 30"
      }
    ]
  },
  {
    "id": "bus-30c",
    "sno": 108,
    "busNumber": "30C",
    "routeNumber": "30C",
    "routeName": "Elango Nagar to REC Campus",
    "destination": "Elango Nagar",
    "startingPoint": "Elango Nagar",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 30",
    "status": "Scheduled",
    "statusDetail": "Elango Nagar transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n30c.php",
    "stops": [
      {
        "name": "Elango Nagar",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Elango Nagar Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 30"
      }
    ]
  },
  {
    "id": "bus-31",
    "sno": 109,
    "busNumber": "31",
    "routeNumber": "31",
    "routeName": "Valluvarkottam to REC Campus",
    "destination": "Valluvarkottam",
    "startingPoint": "Valluvarkottam",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 31",
    "status": "Scheduled",
    "statusDetail": "Valluvarkottam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n31.php",
    "stops": [
      {
        "name": "Valluvarkottam",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Valluvarkottam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 31"
      }
    ]
  },
  {
    "id": "bus-32",
    "sno": 110,
    "busNumber": "32",
    "routeNumber": "32",
    "routeName": "CIT.Nagar to REC Campus",
    "destination": "CIT.Nagar",
    "startingPoint": "CIT.Nagar",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 32",
    "status": "Scheduled",
    "statusDetail": "CIT.Nagar transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n32.php",
    "stops": [
      {
        "name": "CIT.Nagar",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "CIT.Nagar Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 32"
      }
    ]
  },
  {
    "id": "bus-32c",
    "sno": 111,
    "busNumber": "32C",
    "routeNumber": "32C",
    "routeName": "Ashok Pillar to REC Campus",
    "destination": "Ashok Pillar",
    "startingPoint": "Ashok Pillar",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 32",
    "status": "Scheduled",
    "statusDetail": "Ashok Pillar transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n32c.php",
    "stops": [
      {
        "name": "Ashok Pillar",
        "time": "6:20 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Ashok Pillar Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 32"
      }
    ]
  },
  {
    "id": "bus-33",
    "sno": 112,
    "busNumber": "33",
    "routeNumber": "33",
    "routeName": "K.K.Nagar (Sivan park) to REC Campus",
    "destination": "K.K.Nagar (Sivan park)",
    "startingPoint": "K.K.Nagar (Sivan park)",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 33",
    "status": "Scheduled",
    "statusDetail": "K.K.Nagar (Sivan park) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n33.php",
    "stops": [
      {
        "name": "K.K.Nagar (Sivan park)",
        "time": "6:20 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "K.K.Nagar (Sivan park) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 33"
      }
    ]
  },
  {
    "id": "bus-33c",
    "sno": 113,
    "busNumber": "33C",
    "routeNumber": "33C",
    "routeName": "Nesapakkam to REC Campus",
    "destination": "Nesapakkam",
    "startingPoint": "Nesapakkam",
    "startingTime": "6:35 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 33",
    "status": "Scheduled",
    "statusDetail": "Nesapakkam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n33c.php",
    "stops": [
      {
        "name": "Nesapakkam",
        "time": "6:35 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Nesapakkam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 33"
      }
    ]
  },
  {
    "id": "bus-34",
    "sno": 114,
    "busNumber": "34",
    "routeNumber": "34",
    "routeName": "Porur Ramachandra to REC Campus",
    "destination": "Porur Ramachandra",
    "startingPoint": "Porur Ramachandra",
    "startingTime": "6:45 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 34",
    "status": "On Route",
    "statusDetail": "Porur Ramachandra transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n34.php",
    "stops": [
      {
        "name": "Porur Ramachandra Hospital",
        "time": "6:45 AM",
        "landmark": "Hospital Gate"
      },
      {
        "name": "Iyyappanthangal Depot",
        "time": "6:52 AM",
        "landmark": "MTC Bus Depot"
      },
      {
        "name": "Kumananchavadi",
        "time": "7:05 AM",
        "landmark": "Signal Junction"
      },
      {
        "name": "Poonamallee Bypass",
        "time": "7:18 AM",
        "landmark": "Service Road"
      },
      {
        "name": "Nazarathpet",
        "time": "7:26 AM",
        "landmark": "Outer Ring Road"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 34"
      }
    ]
  },
  {
    "id": "bus-34b",
    "sno": 115,
    "busNumber": "34B",
    "routeNumber": "34B",
    "routeName": "Iyyappanthangal Depot to REC Campus",
    "destination": "Iyyappanthangal Depot",
    "startingPoint": "Iyyappanthangal Depot",
    "startingTime": "6:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 34",
    "status": "Scheduled",
    "statusDetail": "Iyyappanthangal Depot transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n34b.php",
    "stops": [
      {
        "name": "Iyyappanthangal Depot",
        "time": "6:40 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Iyyappanthangal Depot Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 34"
      }
    ]
  },
  {
    "id": "bus-34c",
    "sno": 116,
    "busNumber": "34C",
    "routeNumber": "34C",
    "routeName": "Iyyappanthangal to REC Campus",
    "destination": "Iyyappanthangal",
    "startingPoint": "Iyyappanthangal",
    "startingTime": "6:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 34",
    "status": "Scheduled",
    "statusDetail": "Iyyappanthangal transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n34c.php",
    "stops": [
      {
        "name": "Iyyappanthangal",
        "time": "6:40 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Iyyappanthangal Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 34"
      }
    ]
  },
  {
    "id": "bus-35",
    "sno": 117,
    "busNumber": "35",
    "routeNumber": "35",
    "routeName": "Pammal (Therasa School) to REC Campus",
    "destination": "Pammal (Therasa School)",
    "startingPoint": "Pammal (Therasa School)",
    "startingTime": "6:35 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 35",
    "status": "Scheduled",
    "statusDetail": "Pammal (Therasa School) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n35.php",
    "stops": [
      {
        "name": "Pammal (Therasa School)",
        "time": "6:35 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Pammal (Therasa School) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 35"
      }
    ]
  },
  {
    "id": "bus-35a",
    "sno": 118,
    "busNumber": "35A",
    "routeNumber": "35A",
    "routeName": "Mangadu to REC Campus",
    "destination": "Mangadu",
    "startingPoint": "Mangadu",
    "startingTime": "6:50 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 35",
    "status": "Scheduled",
    "statusDetail": "Mangadu transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n35a.php",
    "stops": [
      {
        "name": "Mangadu",
        "time": "6:50 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Mangadu Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 35"
      }
    ]
  },
  {
    "id": "bus-35b",
    "sno": 119,
    "busNumber": "35B",
    "routeNumber": "35B",
    "routeName": "Karima Nagar to REC Campus",
    "destination": "Karima Nagar",
    "startingPoint": "Karima Nagar",
    "startingTime": "6:45 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 35",
    "status": "Scheduled",
    "statusDetail": "Karima Nagar transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n35b.php",
    "stops": [
      {
        "name": "Karima Nagar",
        "time": "6:45 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Karima Nagar Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 35"
      }
    ]
  },
  {
    "id": "bus-35c",
    "sno": 120,
    "busNumber": "35C",
    "routeNumber": "35C",
    "routeName": "Kundrathur to REC Campus",
    "destination": "Kundrathur",
    "startingPoint": "Kundrathur",
    "startingTime": "6:38 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 35",
    "status": "Scheduled",
    "statusDetail": "Kundrathur transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n35c.php",
    "stops": [
      {
        "name": "Kundrathur",
        "time": "6:38 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Kundrathur Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 35"
      }
    ]
  },
  {
    "id": "bus-35d",
    "sno": 121,
    "busNumber": "35D",
    "routeNumber": "35D",
    "routeName": "Pammal to REC Campus",
    "destination": "Pammal",
    "startingPoint": "Pammal",
    "startingTime": "6:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 35",
    "status": "Scheduled",
    "statusDetail": "Pammal transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n35d.php",
    "stops": [
      {
        "name": "Pammal",
        "time": "6:40 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Pammal Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 35"
      }
    ]
  },
  {
    "id": "bus-35e",
    "sno": 122,
    "busNumber": "35E",
    "routeNumber": "35E",
    "routeName": "Kundrathur to REC Campus",
    "destination": "Kundrathur",
    "startingPoint": "Kundrathur",
    "startingTime": "6:40 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 35",
    "status": "Scheduled",
    "statusDetail": "Kundrathur transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n35e.php",
    "stops": [
      {
        "name": "Kundrathur",
        "time": "6:40 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Kundrathur Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 35"
      }
    ]
  },
  {
    "id": "bus-36",
    "sno": 123,
    "busNumber": "36",
    "routeNumber": "36",
    "routeName": "Kovur to REC Campus",
    "destination": "Kovur",
    "startingPoint": "Kovur",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 36",
    "status": "Scheduled",
    "statusDetail": "Kovur transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n36.php",
    "stops": [
      {
        "name": "Kovur",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Kovur Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 36"
      }
    ]
  },
  {
    "id": "bus-36c",
    "sno": 124,
    "busNumber": "36C",
    "routeNumber": "36C",
    "routeName": "Madhanandapuram to REC Campus",
    "destination": "Madhanandapuram",
    "startingPoint": "Madhanandapuram",
    "startingTime": "6:35 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 36",
    "status": "Scheduled",
    "statusDetail": "Madhanandapuram transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n36c.php",
    "stops": [
      {
        "name": "Madhanandapuram",
        "time": "6:35 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Madhanandapuram Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 36"
      }
    ]
  },
  {
    "id": "bus-37",
    "sno": 125,
    "busNumber": "37",
    "routeNumber": "37",
    "routeName": "DLF to REC Campus",
    "destination": "DLF",
    "startingPoint": "DLF",
    "startingTime": "6:45 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 37",
    "status": "On Route",
    "statusDetail": "DLF transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n37.php",
    "stops": [
      {
        "name": "DLF IT Park",
        "time": "6:45 AM",
        "landmark": "Gate 1 Main Road"
      },
      {
        "name": "Mugalivakkam",
        "time": "6:52 AM",
        "landmark": "Shell Petrol Bunk"
      },
      {
        "name": "Karayanchavadi",
        "time": "7:05 AM",
        "landmark": "Junction"
      },
      {
        "name": "Poonamallee Bus Stand",
        "time": "7:12 AM",
        "landmark": "Opposite Stand"
      },
      {
        "name": "Chembarambakkam",
        "time": "7:28 AM",
        "landmark": "NH4 Bridge"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 37"
      }
    ]
  },
  {
    "id": "bus-37a",
    "sno": 126,
    "busNumber": "37A",
    "routeNumber": "37A",
    "routeName": "Iyyappanthangal (Reliance Mart) to REC Campus",
    "destination": "Iyyappanthangal (Reliance Mart)",
    "startingPoint": "Iyyappanthangal (Reliance Mart)",
    "startingTime": "6:50 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 37",
    "status": "Scheduled",
    "statusDetail": "Iyyappanthangal (Reliance Mart) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n37a.php",
    "stops": [
      {
        "name": "Iyyappanthangal (Reliance Mart)",
        "time": "6:50 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Iyyappanthangal (Reliance Mart) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 37"
      }
    ]
  },
  {
    "id": "bus-37b",
    "sno": 127,
    "busNumber": "37B",
    "routeNumber": "37B",
    "routeName": "Karayanchavadi to REC Campus",
    "destination": "Karayanchavadi",
    "startingPoint": "Karayanchavadi",
    "startingTime": "7:05 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 37",
    "status": "Scheduled",
    "statusDetail": "Karayanchavadi transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n37b.php",
    "stops": [
      {
        "name": "Karayanchavadi",
        "time": "7:05 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Karayanchavadi Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 37"
      }
    ]
  },
  {
    "id": "bus-37c",
    "sno": 128,
    "busNumber": "37C",
    "routeNumber": "37C",
    "routeName": "Poonamallee Bus Stand to REC Campus",
    "destination": "Poonamallee Bus Stand",
    "startingPoint": "Poonamallee Bus Stand",
    "startingTime": "7:05 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 37",
    "status": "Scheduled",
    "statusDetail": "Poonamallee Bus Stand transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n37c.php",
    "stops": [
      {
        "name": "Poonamallee Bus Stand",
        "time": "7:05 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Poonamallee Bus Stand Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 37"
      }
    ]
  },
  {
    "id": "bus-37d",
    "sno": 129,
    "busNumber": "37D",
    "routeNumber": "37D",
    "routeName": "Poonamallee Ambedkar statue to REC Campus",
    "destination": "Poonamallee Ambedkar statue",
    "startingPoint": "Poonamallee Ambedkar statue",
    "startingTime": "7:00 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 37",
    "status": "Scheduled",
    "statusDetail": "Poonamallee Ambedkar statue transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n37d.php",
    "stops": [
      {
        "name": "Poonamallee Ambedkar statue",
        "time": "7:00 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Poonamallee Ambedkar statue Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 37"
      }
    ]
  },
  {
    "id": "bus-37e",
    "sno": 130,
    "busNumber": "37E",
    "routeNumber": "37E",
    "routeName": "Poonamallee to REC Campus",
    "destination": "Poonamallee",
    "startingPoint": "Poonamallee",
    "startingTime": "7:00 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 37",
    "status": "Scheduled",
    "statusDetail": "Poonamallee transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n37e.php",
    "stops": [
      {
        "name": "Poonamallee",
        "time": "7:00 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Poonamallee Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 37"
      }
    ]
  },
  {
    "id": "bus-38",
    "sno": 130,
    "busNumber": "38",
    "routeNumber": "38",
    "routeName": "Housing Board to REC Campus",
    "destination": "Housing Board",
    "startingPoint": "Housing Board",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 38",
    "status": "Scheduled",
    "statusDetail": "Housing Board transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n38.php",
    "stops": [
      {
        "name": "Housing Board",
        "time": "6:20 AM",
        "landmark": "Colony Entrance"
      },
      {
        "name": "Kancheepuram Bus Stand",
        "time": "6:30 AM",
        "landmark": "Town Bus Stand"
      },
      {
        "name": "Kancheepuram Collectorate",
        "time": "6:38 AM",
        "landmark": "District Office"
      },
      {
        "name": "Sunguvarchatram",
        "time": "7:10 AM",
        "landmark": "NH4 Junction"
      },
      {
        "name": "Sriperumbudur Toll",
        "time": "7:25 AM",
        "landmark": "Rajiv Gandhi Memorial"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 38"
      }
    ]
  },
  {
    "id": "bus-38b",
    "sno": 131,
    "busNumber": "38B",
    "routeNumber": "38B",
    "routeName": "Kancheepuram Bus Stand to REC Campus",
    "destination": "Kancheepuram Bus Stand",
    "startingPoint": "Kancheepuram Bus Stand",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 38",
    "status": "Scheduled",
    "statusDetail": "Kancheepuram Bus Stand transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n38b.php",
    "stops": [
      {
        "name": "Kancheepuram Bus Stand",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Kancheepuram Bus Stand Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 38"
      }
    ]
  },
  {
    "id": "bus-38c",
    "sno": 132,
    "busNumber": "38C",
    "routeNumber": "38C",
    "routeName": "Kancheepuram collectorate to REC Campus",
    "destination": "Kancheepuram collectorate",
    "startingPoint": "Kancheepuram collectorate",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 38",
    "status": "Scheduled",
    "statusDetail": "Kancheepuram collectorate transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n38c.php",
    "stops": [
      {
        "name": "Kancheepuram collectorate",
        "time": "6:20 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Kancheepuram collectorate Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 38"
      }
    ]
  },
  {
    "id": "bus-39",
    "sno": 133,
    "busNumber": "39",
    "routeNumber": "39",
    "routeName": "Orikkai to REC Campus",
    "destination": "Orikkai",
    "startingPoint": "Orikkai",
    "startingTime": "6:10 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 39",
    "status": "Scheduled",
    "statusDetail": "Orikkai transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n39.php",
    "stops": [
      {
        "name": "Orikkai",
        "time": "6:10 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Orikkai Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 39"
      }
    ]
  },
  {
    "id": "bus-39c",
    "sno": 134,
    "busNumber": "39C",
    "routeNumber": "39C",
    "routeName": "Kancheepuram to REC Campus",
    "destination": "Kancheepuram",
    "startingPoint": "Kancheepuram",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 39",
    "status": "Scheduled",
    "statusDetail": "Kancheepuram transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n39c.php",
    "stops": [
      {
        "name": "Kancheepuram",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Kancheepuram Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 39"
      }
    ]
  },
  {
    "id": "bus-40",
    "sno": 135,
    "busNumber": "40",
    "routeNumber": "40",
    "routeName": "Walajabad to REC Campus",
    "destination": "Walajabad",
    "startingPoint": "Walajabad",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 40",
    "status": "Scheduled",
    "statusDetail": "Walajabad transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n40.php",
    "stops": [
      {
        "name": "Walajabad",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Walajabad Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 40"
      }
    ]
  },
  {
    "id": "bus-40a",
    "sno": 136,
    "busNumber": "40A",
    "routeNumber": "40A",
    "routeName": "Muthiyalpettai to REC Campus",
    "destination": "Muthiyalpettai",
    "startingPoint": "Muthiyalpettai",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 40",
    "status": "Scheduled",
    "statusDetail": "Muthiyalpettai transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n40a.php",
    "stops": [
      {
        "name": "Muthiyalpettai",
        "time": "6:20 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Muthiyalpettai Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 40"
      }
    ]
  },
  {
    "id": "bus-40b",
    "sno": 137,
    "busNumber": "40B",
    "routeNumber": "40B",
    "routeName": "Rangasamy Kulam to REC Campus",
    "destination": "Rangasamy Kulam",
    "startingPoint": "Rangasamy Kulam",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 40",
    "status": "Scheduled",
    "statusDetail": "Rangasamy Kulam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n40b.php",
    "stops": [
      {
        "name": "Rangasamy Kulam",
        "time": "6:20 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Rangasamy Kulam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 40"
      }
    ]
  },
  {
    "id": "bus-40c",
    "sno": 138,
    "busNumber": "40C",
    "routeNumber": "40C",
    "routeName": "Kancheepuram Bus Stand to REC Campus",
    "destination": "Kancheepuram Bus Stand",
    "startingPoint": "Kancheepuram Bus Stand",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 40",
    "status": "Scheduled",
    "statusDetail": "Kancheepuram Bus Stand transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n40c.php",
    "stops": [
      {
        "name": "Kancheepuram Bus Stand",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Kancheepuram Bus Stand Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 40"
      }
    ]
  },
  {
    "id": "bus-40d",
    "sno": 139,
    "busNumber": "40D",
    "routeNumber": "40D",
    "routeName": "Kancheepuram to REC Campus",
    "destination": "Kancheepuram",
    "startingPoint": "Kancheepuram",
    "startingTime": "6:20 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 40",
    "status": "Scheduled",
    "statusDetail": "Kancheepuram transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n40d.php",
    "stops": [
      {
        "name": "Kancheepuram",
        "time": "6:20 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Kancheepuram Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 40"
      }
    ]
  },
  {
    "id": "bus-41c",
    "sno": 140,
    "busNumber": "41C",
    "routeNumber": "41C",
    "routeName": "Vellore (Faculty & Staff only) to REC Campus",
    "destination": "Vellore (Faculty & Staff only)",
    "startingPoint": "Vellore (Faculty & Staff only)",
    "startingTime": "5:10 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 41",
    "status": "Scheduled",
    "statusDetail": "Vellore (Faculty & Staff only) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n41c.php",
    "stops": [
      {
        "name": "Vellore (Faculty & Staff only)",
        "time": "5:10 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Vellore (Faculty & Staff only) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 41"
      }
    ]
  },
  {
    "id": "bus-42",
    "sno": 141,
    "busNumber": "42",
    "routeNumber": "42",
    "routeName": "Arakkonam to REC Campus",
    "destination": "Arakkonam",
    "startingPoint": "Arakkonam",
    "startingTime": "6:08 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 42",
    "status": "Scheduled",
    "statusDetail": "Arakkonam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n42.php",
    "stops": [
      {
        "name": "Arakkonam",
        "time": "6:08 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Arakkonam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 42"
      }
    ]
  },
  {
    "id": "bus-42a",
    "sno": 142,
    "busNumber": "42A",
    "routeNumber": "42A",
    "routeName": "S R Gate to REC Campus",
    "destination": "S R Gate",
    "startingPoint": "S R Gate",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 42",
    "status": "Scheduled",
    "statusDetail": "S R Gate transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n42a.php",
    "stops": [
      {
        "name": "S R Gate",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "S R Gate Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 42"
      }
    ]
  },
  {
    "id": "bus-42c",
    "sno": 143,
    "busNumber": "42C",
    "routeNumber": "42C",
    "routeName": "Arakkonam to REC Campus",
    "destination": "Arakkonam",
    "startingPoint": "Arakkonam",
    "startingTime": "6:15 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 42",
    "status": "Scheduled",
    "statusDetail": "Arakkonam transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n42c.php",
    "stops": [
      {
        "name": "Arakkonam",
        "time": "6:15 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Arakkonam Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 42"
      }
    ]
  },
  {
    "id": "bus-42d",
    "sno": 144,
    "busNumber": "42D",
    "routeNumber": "42D",
    "routeName": "Suvalpet to REC Campus",
    "destination": "Suvalpet",
    "startingPoint": "Suvalpet",
    "startingTime": "6:10 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 42",
    "status": "Scheduled",
    "statusDetail": "Suvalpet transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n42d.php",
    "stops": [
      {
        "name": "Suvalpet",
        "time": "6:10 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Suvalpet Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 42"
      }
    ]
  },
  {
    "id": "bus-44",
    "sno": 145,
    "busNumber": "44",
    "routeNumber": "44",
    "routeName": "Meenakshi College (KPM) to REC Campus",
    "destination": "Meenakshi College (KPM)",
    "startingPoint": "Meenakshi College (KPM)",
    "startingTime": "6:30 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 44",
    "status": "Scheduled",
    "statusDetail": "Meenakshi College (KPM) transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n44.php",
    "stops": [
      {
        "name": "Meenakshi College (KPM)",
        "time": "6:30 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Meenakshi College (KPM) Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 44"
      }
    ]
  },
  {
    "id": "bus-45",
    "sno": 146,
    "busNumber": "45",
    "routeNumber": "45",
    "routeName": "Padappai to REC Campus",
    "destination": "Padappai",
    "startingPoint": "Padappai",
    "startingTime": "6:25 AM",
    "shift": "Morning",
    "tripType": "Trip 1",
    "campusArrival": "7:45 AM",
    "returnTimings": [
      "3:15 PM",
      "5:05 PM"
    ],
    "campusBay": "Bay 45",
    "status": "Scheduled",
    "statusDetail": "Padappai transit corridor to Rajalakshmi Engineering College",
    "officialLink": "https://www.rectransport.com/routes/n45.php",
    "stops": [
      {
        "name": "Padappai",
        "time": "6:25 AM",
        "landmark": "Starting Boarding Point"
      },
      {
        "name": "Padappai Junction",
        "time": "6:35 AM",
        "landmark": "Main Road"
      },
      {
        "name": "Poonamallee / Outer Ring Road",
        "time": "7:15 AM",
        "landmark": "NH4 Approach"
      },
      {
        "name": "REC Thandalam Campus",
        "time": "7:45 AM",
        "landmark": "Bay 45"
      }
    ]
  }
];

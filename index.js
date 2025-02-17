const restaurant_json = [
  {
    "title": "Giacomo's Ristorante",
    "price": 3,
    "categories": ["Italian"],
    "location": "North End",
    "distance": 3,
    "transport": "walk",
    "url": "https://www.giacomosboston.com/menu-todays-special",
    "visited": 1,
    "cash_only": 0,
    "notes": "Try the butternut squash ravioli"
  },
  {
    "title": "Mike's Pastry",
    "price": 1,
    "categories": ["Dessert"],
    "location": "North End",
    "distance": 4,
    "transport": "walk",
    "url": "https://www.mikespastry.com/",
    "visited": 0,
    "cash_only": 1,
    "notes": ""
  },
  {
    "title": "Carmelina's",
    "price": 4,
    "categories": ["Italian"],
    "location": "North End",
    "distance": 4,
    "transport": "walk",
    "url": "https://www.carmelinasboston.com/",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Panza",
    "price": 2,
    "categories": ["Italian"],
    "location": "North End",
    "distance": 4,
    "transport": "walk",
    "url": "https://panzarestaurant.com/menu",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Galleria Umberto",
    "price": 1,
    "categories": ["Italian", "Pizza", "Slice"],
    "location": "North End",
    "distance": 5,
    "transport": "walk",
    "url": "https://www.yelp.com/biz/galleria-umberto-boston",
    "visited": 0,
    "cash_only": 1,
    "notes": "Try the pizza and arancini"
  },
  {
    "title": "Tenoch Mexican",
    "price": 2,
    "categories": ["Mexican"],
    "location": "North End",
    "distance": 6,
    "transport": "walk",
    "url": "https://tenoch-boston.square.site/",
    "visited": 0,
    "cash_only": 0,
    "notes": "Try the Choriqueso or any Torta"
  },
  {
    "title": "Modern Pastry",
    "price": 1,
    "categories": ["Dessert"],
    "location": "North End",
    "distance": 6,
    "transport": "walk",
    "url": "https://modernpastry.com/",
    "visited": 2,
    "cash_only": 1,
    "notes": ""
  },
  {
    "title": "Quattro",
    "price": 2,
    "categories": ["Italian", "Pizza"],
    "location": "North End",
    "distance": 6,
    "transport": "walk",
    "url": "https://quattro-boston.com/menu/brick-oven-pizza/",
    "visited": 0,
    "cash_only": 0,
    "notes": "Try the potato pizza"
  },
  {
    "title": "Trattoria Il Panino",
    "price": 3,
    "categories": ["Italian", "Late Night"],
    "location": "North End",
    "distance": 6,
    "transport": "walk",
    "url": "https://trattoriailpanino.com/menu/",
    "visited": 1,
    "cash_only": 0,
    "notes": "The tortelli is the best"
  },
  {
    "title": "Lucca Restaurant",
    "price": 4,
    "categories": ["Italian"],
    "location": "North End",
    "distance": 6,
    "transport": "walk",
    "url": "https://www.luccaboston.com/ld/",
    "visited": 0,
    "cash_only": 0,
    "notes": "Try the meatballs"
  },
  {
    "title": "Arya Trattoria",
    "price": 3,
    "categories": ["Italian"],
    "location": "North End",
    "distance": 6,
    "transport": "walk",
    "url": "https://aryatrattoria.com/menu/",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "La Famiglia Giorgio's",
    "price": 3,
    "categories": ["Italian"],
    "location": "North End",
    "distance": 6,
    "transport": "walk",
    "url": "https://www.lafamigliagiorgios.com/dinner.html#a",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Regina's Pizzeria",
    "price": 2,
    "categories": ["Italian", "Pizza", "Slice"],
    "location": "North End",
    "distance": 7,
    "transport": "walk",
    "url": "https://www.pizzeriaregina.com/assets/files/reg_northend_takeout_menu_0424.pdf",
    "visited": 1,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Ernesto's Pizza",
    "price": 3,
    "categories": ["Italian", "Pizza", "Slice"],
    "location": "North End",
    "distance": 8,
    "transport": "walk",
    "url": "https://www.orderernestospizza.com/",
    "visited": 1,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Bon Me",
    "price": 2,
    "categories": ["Asian"],
    "location": "Boston Proper",
    "distance": 9,
    "transport": "walk",
    "url": "https://orders.bonmetruck.com/",
    "visited": 1,
    "cash_only": 0,
    "notes": "Good banh mi"
  },
  {
    "title": "Saus",
    "price": 1,
    "categories": ["American", "Late Night"],
    "location": "Boston Proper",
    "distance": 11,
    "transport": "walk",
    "url": "https://www.sausboston.com/boston-menu",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Falafel King",
    "price": 2,
    "categories": ["Mediterranean"],
    "location": "Boston Proper",
    "distance": 17,
    "transport": "walk",
    "url": "https://falafelkingboston.com/",
    "visited": 0,
    "cash_only": 0,
    "notes": "Try the... falafel (duh)"
  },
  {
    "title": "Kane's Donuts",
    "price": 1,
    "categories": ["Dessert"],
    "location": "Boston Proper",
    "distance": 20,
    "transport": "walk",
    "url": "https://www.kanesdonuts.com/",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Blackbird Donuts",
    "price": 1,
    "categories": ["Dessert"],
    "location": "Beacon Hill",
    "distance": 20,
    "transport": "walk",
    "url": "https://www.blackbirddoughnuts.com/doughnuts",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Cactus Mexican Grill",
    "price": 1,
    "categories": ["Mexican"],
    "location": "East Boston",
    "distance": 20,
    "transport": "train",
    "url": "https://www.yelp.com/biz/cactus-mexican-grill-boston-2",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Tasty Burger",
    "price": 1,
    "categories": ["American", "Late Night"],
    "location": "Back Bay",
    "distance": 21,
    "transport": "train",
    "url": "http://www.tastyburger.com/",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Mamaleh's",
    "price": 1,
    "categories": ["Breakfast", "Jewish"],
    "location": "Boston Proper",
    "distance": 22,
    "transport": "walk",
    "url": "http://mamalehs.com/",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Avana Sushi",
    "price": 1,
    "categories": ["Japanese", "Sushi"],
    "location": "Boston Proper",
    "distance": 22,
    "transport": "walk",
    "url": "https://www.avanasushi.com/locations",
    "visited": 0,
    "cash_only": 0,
    "notes": "Try the M-F two rolls/soup lunch special"
  },
  {
    "title": "Flour Bakery & Cafe",
    "price": 1,
    "categories": ["Dessert"],
    "location": "Beacon Hill",
    "distance": 22,
    "transport": "walk",
    "url": "https://www.flourbakery.com/",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Anna's Taqueria",
    "price": 1,
    "categories": ["Mexican"],
    "location": "Beacon Hill",
    "distance": 23,
    "transport": "walk",
    "url": "https://annastaqueria.com/locations/",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "The Smoke Shop BBQ",
    "price": 2,
    "categories": ["American", "Alex"],
    "location": "East Boston",
    "distance": 23,
    "transport": "train",
    "url": "https://thesmokeshopbbq.com/food-menu/",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Tenderoni's Pizza",
    "price": 1,
    "categories": ["Italian", "Pizza", "Slice"],
    "location": "Boston Proper",
    "distance": 23,
    "transport": "walk",
    "url": "https://www.tenderonis.com/hsp-menu",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Ciao! Pizza and Pasta",
    "price": 2,
    "categories": ["Italian", "Pizza"],
    "location": "East Boston",
    "distance": 24,
    "transport": "bus",
    "url": "https://www.yelp.com/biz/ciao-pizza-and-pasta-chelsea-2?osq=Thick+Crust+Pizza",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Cafe Mami",
    "price": 1,
    "categories": ["Japanese"],
    "location": "Cambridge (Porter Square)",
    "distance": 25,
    "transport": "train",
    "url": "http://www.yelp.com/biz/caf%C3%A9-mami-cambridge-2",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Yume Wo Katare",
    "price": 2,
    "categories": ["Japanese", "Ramen"],
    "location": "Cambridge (Porter Square)",
    "distance": 26,
    "transport": "train",
    "url": "https://www.yelp.com/biz/yume-wo-katare-cambridge-2",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Izakaya Ittoku",
    "price": 2,
    "categories": ["Japanese"],
    "location": "Cambridge (Porter Square)",
    "distance": 26,
    "transport": "train",
    "url": "https://www.ittoku.org/",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Fuji",
    "price": 2,
    "categories": ["Japanese", "Sushi"],
    "location": "Chinatown",
    "distance": 27,
    "transport": "train",
    "url": "https://www.fujiatinkblock.com/menus/#lunch",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "El Jefe's Taqueria",
    "price": 2,
    "categories": ["Mexican", "Late Night"],
    "location": "Boston Proper",
    "distance": 28,
    "transport": "walk",
    "url": "https://www.eljefestaqueria.com/copy-of-menu",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "The Beehive",
    "price": 2,
    "categories": ["American", "Drinks", "Alex"],
    "location": "South End",
    "distance": 28,
    "transport": "train",
    "url": "https://www.beehiveboston.com/menu",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Oakleaf Cakes",
    "price": 1,
    "categories": ["Dessert"],
    "location": "Back Bay",
    "distance": 29,
    "transport": "train",
    "url": "https://oakleafcakes.com/bakeshop",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Rino's Place",
    "price": 2,
    "categories": ["Italian"],
    "location": "East Boston",
    "distance": 30,
    "transport": "train",
    "url": "http://rinosplace.com/",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Shojo",
    "price": 2,
    "categories": ["Asian", "Ramen"],
    "location": "Chinatown",
    "distance": 30,
    "transport": "walk",
    "url": "https://www.shojoboston.com/food-menu",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Angela's Cafe",
    "price": 2,
    "categories": ["Breakfast", "Mexican"],
    "location": "East Boston",
    "distance": 31,
    "transport": "train",
    "url": "https://www.angelascafeboston.com/menu",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Taqueria Jalisco",
    "price": 2,
    "categories": ["Mexican"],
    "location": "East Boston",
    "distance": 31,
    "transport": "train",
    "url": "https://www.yelp.com/biz/taqueria-jalisco-boston-2",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "South Street Diner",
    "price": 2,
    "categories": ["Breakfast", "American", "Late Night"],
    "location": "Chinatown",
    "distance": 31,
    "transport": "walk",
    "url": "https://southstreetdiner.com/menu.php",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "The Druid",
    "price": 2,
    "categories": ["Irish", "Drinks", "Alex"],
    "location": "Cambridge (Inman Square)",
    "distance": 33,
    "transport": "train",
    "url": "http://www.druidpub.com/",
    "visited": 0,
    "cash_only": 0,
    "notes": "Try the fish and chips"
  },
  {
    "title": "McKenna's Cafe",
    "price": 1,
    "categories": ["Breakfast"],
    "location": "South End",
    "distance": 34,
    "transport": "train",
    "url": "https://www.mckennascafe.com/our-menu",
    "visited": 0,
    "cash_only": 0,
    "notes": "Try the blueberry pancakes"
  },
  {
    "title": "Toro",
    "price": 3,
    "categories": ["Tapas"],
    "location": "South End",
    "distance": 34,
    "transport": "train",
    "url": "https://www.toro-restaurant.com/menus",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Punjabi Dhaba",
    "price": 2,
    "categories": ["Indian"],
    "location": "Cambridge (Inman Square)",
    "distance": 34,
    "transport": "train",
    "url": "https://punjabidhaba.co/",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "India Pavilion",
    "price": 2,
    "categories": ["Indian"],
    "location": "Cambridge (Central Square)",
    "distance": 36,
    "transport": "train",
    "url": "https://indiapavilion.co/",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Happy Lamb Hotpot",
    "price": 2,
    "categories": ["Asian"],
    "location": "Cambridge (Central Square)",
    "distance": 37,
    "transport": "train",
    "url": "https://happylambhotpot.com/",
    "visited": 3,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Desi Dhaba",
    "price": 2,
    "categories": ["Indian"],
    "location": "Cambridge (Central Square)",
    "distance": 38,
    "transport": "train",
    "url": "https://www.cambridgedesidhaba.net/",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Si Cara",
    "price": 1,
    "categories": ["Italian", "Pizza", "Slice"],
    "location": "Cambridge (Central Square)",
    "distance": 38,
    "transport": "train",
    "url": "https://sicarapizza.com/cambridge-central-square-si-cara-food-menu",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Mr. Bartley's Burger Cottage",
    "price": 2,
    "categories": ["American"],
    "location": "Cambridge (Harvard Square)",
    "distance": 43,
    "transport": "train",
    "url": "https://mrbartley.com/menu/",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Pinocchio's Pizza & Subs",
    "price": 2,
    "categories": ["Italian", "Pizza", "Slice", "Late Night"],
    "location": "Cambridge (Harvard Square)",
    "distance": 43,
    "transport": "train",
    "url": "http://www.pinocchiospizza.net/menu.html",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Hojoko",
    "price": 2,
    "categories": ["Japanese"],
    "location": "Back Bay",
    "distance": 46,
    "transport": "train",
    "url": "https://www.hojokoboston.com/menus/",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Mortadella Head",
    "price": 2,
    "categories": ["Italian", "Pizza"],
    "location": "Way Out There",
    "distance": 48,
    "transport": "train",
    "url": "https://mortadellahead.com/",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Pizza Roma",
    "price": 2,
    "categories": ["Italian", "Pizza"],
    "location": "Way Out There",
    "distance": 49,
    "transport": "train",
    "url": "https://pizza-roma-watertownma.square.site/",
    "visited": 0,
    "cash_only": 1,
    "notes": ""
  },
  {
    "title": "Volo Craft Pizza",
    "price": 3,
    "categories": ["Italian", "Pizza"],
    "location": "Way Out There",
    "distance": 50,
    "transport": "train",
    "url": "https://www.volopizzeria.com/",
    "visited": 0,
    "cash_only": 0,
    "notes": ""
  },
  {
    "title": "Deluxe Town Diner",
    "price": 1,
    "categories": ["Breakfast"],
    "location": "Way Out There",
    "distance": 60,
    "transport": "train",
    "url": "http://www.deluxetowndiner.com/menu",
    "visited": 0,
    "cash_only": 0,
    "notes": "Try the blueberry pancakes"
  }
];

// function to remove all children from a parent elt 
function deleteChildElements(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

/*************************************************************************************
 * add all data from restaurants array to page
*/
let restaurant_count = 0;

const restaurantsContainer = document.getElementById("restaurants-container");
function addRestaurantsToPage(restaurants) {
  restaurants.forEach(restaurant => {
    let card = document.createElement('div');
    card.classList.add('restaurant-card')

    card.innerHTML = `<a class='restaurant-link' href='${restaurant.url}' target="_blank" >
                        <b>${restaurant.title}</b>
                        <div>
                          <p class="restaurant-price">${'$'.repeat(Number(restaurant.price))}</p>
                          <p>[ ${restaurant.categories} ]</p>
                          <p>${restaurant.location}</p>
                          <p>${restaurant.distance} minutes (${restaurant.transport})</p>
                          <p>${restaurant.notes}</p>
                        </div>
                      </a>`;

    if (restaurant.visited >= 1) {
      // card.classList.add('visited');
      card.innerHTML += "<img src='assets/stamp.svg' class='visited-stamp' />";
    }

    restaurantsContainer.appendChild(card);
  });
}
addRestaurantsToPage(restaurant_json);
updateSliderMinutes(50);

// /*************************************************************************************
//  * create summary statistics at the top of the page
//  * total number of restaurants, average rating, most popular restaurant.
// */

// find/set total number of restaurants
const restaurantsCard = document.getElementById("num-restaurants");
restaurantsCard.innerHTML = `${restaurant_json.length}`;

// find/set number of restaurants visited so far
const visitedRestaurants = restaurant_json.filter(restaurant => {
  return restaurant.visited > 0;
});

const visitedCard = document.getElementById("total-visited");
visitedCard.innerHTML = `${visitedRestaurants.length}`;

// find/set the most visited restaurant
const mostVisitedRestaurant = restaurant_json.reduce((mostVisited, restaurant) => {
  return restaurant.visited > mostVisited.visited ? restaurant : mostVisited;
}, restaurant_json[0]); // initial value === first restaurant in array

const mostVisitedCard = document.getElementById("most-visited");
mostVisitedCard.innerHTML = `${mostVisitedRestaurant.title}<br />(${mostVisitedRestaurant.visited} visits)`;


/*************************************************************************************
 * add functions to filter the restaurants
*/

function showAllRestaurants() {
  deleteChildElements(restaurantsContainer);
  addRestaurantsToPage(restaurant_json);
}

function filterUnvisitedRestaurants() {
  deleteChildElements(restaurantsContainer);
  let ratedRestaurants = restaurant_json.filter((restaurant) => {
    return restaurant.visited === 0;
  });
  addRestaurantsToPage(ratedRestaurants);
}

function filterCategory(category) {
  deleteChildElements(restaurantsContainer);
  let filteredRestaurants = restaurant_json.filter((restaurant) => {
    return restaurant.categories.includes(category);
  });
  addRestaurantsToPage(filteredRestaurants);
}

function updateSliderMinutes(val) {
  document.getElementById('selectedMinutes').innerHTML = val;
}

function updateShownRestaurants(event) {
  event.preventDefault();
  deleteChildElements(restaurantsContainer);

  const form = document.getElementById('filters-form');
  const unvisitedOnly = form.querySelector('input[name="show"]:checked')?.value === 'unvisited';
  const selectedCategories = Array.from(form.querySelectorAll('input[name="categories"]:checked')).map(el => el.value);
  const selectedPriceRange = Array.from(form.querySelectorAll('input[name="price"]:checked')).map(el => Number(el.value));
  const selectedMinutes = Number(form.querySelector('input[name="minutes"]').value);
  const selectedTransport = Array.from(form.querySelectorAll('input[name="transport"]:checked')).map(el => el.value);
  const selectedLocations = Array.from(form.querySelectorAll('input[name="location"]:checked')).map(el => el.value);

  let filteredRestaurants = restaurant_json.filter((restaurant) => {
    let matchesCategory = selectedCategories.length === 0 || selectedCategories.some(category => restaurant.categories.includes(category));
    let matchesPrice = !selectedPriceRange.length || selectedPriceRange.includes(restaurant.price);
    let matchesMinutes = restaurant.distance <= selectedMinutes;
    let matchesTransport = !selectedTransport.length || selectedTransport.includes(restaurant.transport);
    let matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(restaurant.location);

    if (unvisitedOnly && restaurant.visited > 0) {
      return false;
    }

    return matchesCategory && matchesPrice && matchesMinutes && matchesTransport && matchesLocation;
  });

  addRestaurantsToPage(filteredRestaurants);
}


document.getElementById('filters-form').addEventListener('submit', updateShownRestaurants);


/************************************************************************************
 * Searching restaurant titles logic
*/

function filterSearchedRestaurants(query) {
  deleteChildElements(restaurantsContainer);

  // use filter() to get a list of restaurants that match the search query
  let searchedRestaurants = restaurant_json.filter((restaurant) => {
    const restaurantTitle = restaurant.title.toLowerCase();
    return restaurantTitle.includes(query);
  });

  // use the function we previously created to add the filtered list of restaurants to the DOM
  addRestaurantsToPage(searchedRestaurants);
}

const searchBox = document.getElementById("search");
searchBox.addEventListener("input", function () {
  filterSearchedRestaurants(searchBox.value.toLowerCase());
});
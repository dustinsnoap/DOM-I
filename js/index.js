const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//TASK 2: UPDATE IMAGE PATHS
let imgSetter = (id, src) => document.getElementById(id).setAttribute('src', src);
imgSetter('logo-img', siteContent.nav["img-src"]);
imgSetter('cta-img', siteContent.cta["img-src"]);
imgSetter('middle-img', siteContent["main-content"]["middle-img-src"]);

//TASK 3: UPDATE TEXT CONTENT
//NAV
//filter out text tags from nav then add text from siteContent to each remaining (anchor) tag
//steal filter method from array class and apply it to childNodes
[].filter.call(document.getElementsByTagName('nav')[0].childNodes, node => node.nodeType === Node.ELEMENT_NODE)
  .forEach((node, i) => node.textContent = siteContent.nav[`nav-item-${(i+1)}`]);

//CTA
document.getElementsByClassName("cta-text")[0].childNodes
.forEach(node => node.textContent = siteContent.cta[node.nodeName.toLowerCase()]);

//MAIN CONTENT
//grab each text-content inside of main-content
[].forEach.call(document.getElementsByClassName('main-content')[0].getElementsByClassName('text-content'), txtContent => {
//filter out all the text tags and grab all the h4's and p's
[].filter.call(txtContent.childNodes, node => node.nodeType === Node.ELEMENT_NODE)
  .forEach(node => {
    //loop through main-content object, remove img if found, add text to node if not #jankyButWorks
    for(let key in siteContent['main-content']) { //for loop because how else do I get the first prop in an object?
      if(key.includes('img-src')) {delete siteContent['main-content'][key]; continue;}
      node.textContent = siteContent['main-content'][key];
      delete siteContent['main-content'][key]; //deletes prop so next iritation doesn't use it
      break;
    }
  })
});

//CONTACT
//same basic janky magic from main content
[].filter.call(document.getElementsByClassName('contact')[0].childNodes, node => node.nodeType === Node.ELEMENT_NODE)
.forEach(node => {
  for(let key in siteContent['contact']) {
    node.textContent = siteContent['contact'][key];
    delete siteContent['contact'][key];
    break;
  }
});

//FOOTER
document.querySelector('footer p').textContent = siteContent.footer.copyright;
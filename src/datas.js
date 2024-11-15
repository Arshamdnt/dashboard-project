let xAxisData = [
    { "name": "Jan", "sale": 112000 },
    { "name": "Feb", "sale": 99000 },
    { "name": "Mar", "sale": 12000 },
    { "name": "Apr", "sale": 133000 },
    { "name": "May", "sale": 57000 },
    { "name": "Jun", "sale": 112000 },
    { "name": "Jul", "sale": 79000 },
    { "name": "Agu", "sale": 83000 },
    { "name": "Sep", "sale": 19000 },
    { "name": "Oct", "sale": 46000 },
    { "name": "Nov", "sale": 77000 },
    { "name": "Dec", "sale": 98000 }
];

let newUser = [
    { id: 2, userName: 'Alireza Ebrahimi', title: 'SEO Eng', img: `${process.env.PUBLIC_URL}/images/newuser.jpg` },
    { id: 1, userName: 'Hoseon Moradi', title: 'Frontend developer', img: `${process.env.PUBLIC_URL}/images/newuser2.jpg` },
    { id: 3, userName: 'Arash Rezavand', title: 'Backend developer', img: `${process.env.PUBLIC_URL}/images/newuser3.jpg` },
    { id: 4, userName: 'Mohsen Bahmani', title: 'Hacker', img: `${process.env.PUBLIC_URL}/images/newuser4.jpg` }
];

let Transactions = [
    { id: 1, customer: 'Shayan Mohamadi', date: '23 Feb 2024', amount: 145, status: 'Approved', img: `${process.env.PUBLIC_URL}/images/customer.jpg` },
    { id: 2, customer: 'Maryam Asadi', date: '11 Sep 2024', amount: 78, status: 'Pending', img: `${process.env.PUBLIC_URL}/images/customer3.jpg` },
    { id: 3, customer: 'Amir Frahani', date: '5 Jun 2024', amount: 118, status: 'Decline', img: `${process.env.PUBLIC_URL}/images/customer2.jpg` },
    { id: 4, customer: 'Zahra Amini', date: '15 May 2024', amount: 90, status: 'Approved', img: `${process.env.PUBLIC_URL}/images/customer4.jpg` }
];

let userRows = [
    { id: 1, username: 'Sahar Azizi', avatar: `${process.env.PUBLIC_URL}/images/users4.jpg`, status: 'active', transaction: "$140", email: 'Sahar@gmail.com' },
    { id: 2, username: 'Aref Aghasi', avatar: `${process.env.PUBLIC_URL}/images/users.jpg`, status: 'non-active', transaction: "$120", email: 'Aref@gmail.com' },
    { id: 3, username: 'Mehdi hoseinzadeh', avatar: `${process.env.PUBLIC_URL}/images/users2.jpg`, status: 'active', transaction: "$79.5", email: 'Mehdi@gmail.com' },
    { id: 4, username: 'Negar Alipour', avatar: `${process.env.PUBLIC_URL}/images/users5.jpg`, status: 'active', transaction: "$108", email: 'Negar@gmail.com' },
    { id: 5, username: 'Radin Falah', avatar: `${process.env.PUBLIC_URL}/images/users3.jpg`, status: 'active', transaction: "$55.78", email: 'Radin@gmail.com' },
    { id: 6, username: 'Armin Ghafouri', avatar: `${process.env.PUBLIC_URL}/images/user6.jpg`, status: 'non-active', transaction: "$122.19", email: 'Armin@gmail.com' },
    { id: 7, username: 'Mobina Nezamdoost', avatar: `${process.env.PUBLIC_URL}/images/user7.jpg`, status: 'active', transaction: "$64.5", email: 'Mobina@gmail.com' },
    { id: 8, username: 'Zahra Lotfi', avatar: `${process.env.PUBLIC_URL}/images/user8.jpg`, status: 'active', transaction: "$53", email: 'Zahra@gmail.com' },
    { id: 9, username: 'Farhad jamali', avatar: `${process.env.PUBLIC_URL}/images/user9.jpg`, status: 'active', transaction: "$77", email: 'farhad@gmail.com' }
];

let Products = [
    { id: 1, title: 'Asus', avatar: `${process.env.PUBLIC_URL}/images/asus.jpg`, price: 829 },
    { id: 2, title: 'Acer', avatar: `${process.env.PUBLIC_URL}/images/acer.jpg`, price: 700 },
    { id: 3, title: 'HP', avatar: `${process.env.PUBLIC_URL}/images/hp.jpg`, price: 644 },
    { id: 4, title: 'Dell', avatar: `${process.env.PUBLIC_URL}/images/dell.jpg`, price: 580 }
];

let ProductsData = [
    { name: "Jan", sales: 4300 },
    { name: "Feb", sales: 2850 },
    { name: "Mar", sales: 5130 }
];

export { xAxisData, newUser, Transactions, userRows, Products, ProductsData };

export const products = [
    {
      name: "Nike Air Force 1 NDESTRUKT",
      price: "$35.17",
      image: "https://via.placeholder.com/150",
      label: "SALE",
      colors: ["green"],
    },
    {
      name: "Nike Space Hippie 04",
      price: "$57.22",
      image: "https://via.placeholder.com/150",
      colors: ["black"],
    },
    {
      name: "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear",
      price: "$64.78",
      oldPrice: "$64.78",
      image: "https://via.placeholder.com/150",
      label: "SALE",
      colors: ["pink"],
    },
    {
      name: "Nike Blazer Low 77 Vintage",
      price: "$50.79",
      image: "https://via.placeholder.com/150",
      label: "NEW",
      colors: ["blue", "black"],
    },
    {
      name: "Nike Blazer Low 77 Vintage",
      price: "$50.79",
      image: "https://via.placeholder.com/150",
      label: "NEW",
      colors: ["blue", "black"],
    },
    {
      name: "Nike Blazer Low 77 Vintage",
      price: "$50.79",
      image: "https://via.placeholder.com/150",
      label: "NEW",
      colors: ["blue", "black"],
    },
    {
      name: "Nike Blazer Low 77 Vintage",
      price: "$50.79",
      image: "https://via.placeholder.com/150",
      label: "NEW",
      colors: ["blue", "black"],
    },
    {
      name: "Nike Blazer Low 77 Vintage",
      price: "$50.79",
      image: "https://via.placeholder.com/150",
      label: "NEW",
      colors: ["blue", "black"],
    },
    {
      name: "Nike Blazer Low 77 Vintage",
      price: "$50.79",
      image: "https://via.placeholder.com/150",
      label: "NEW",
      colors: ["blue", "black"],
    },
  ];
  
  function createData(id, name, company, role, verified, status) {
    return {
      id,
      name,
      company,
      role,
      verified,
      status,
    };
  }
  
  export const rows = [
    createData(
      1,
      "Adam Trantow",
      "Mohr, Langworth and Hills",
      "UI Designer",
      1,
      1
    ),
    createData(2, "Angel Rolfson-Kulas", "Koch and Sons", "UI Designer", 1, 1),
    createData(3, "Betty Hammes", "Waelchi - VonRueden", "UI Designer", 1, 1),
    createData(
      4,
      "Billy Braun",
      "White, Cassin and Goldner",
      "UI Designer",
      0,
      1
    ),
    createData(
      5,
      "Billy Stoltenberg",
      "Medhurst, Moore and Franey",
      "Leader",
      1,
      0
    ),
    createData(
      6,
      "Brandon Von",
      "Mitchell, Volkman and Prosacco",
      "	UI Designer",
      1,
      1
    ),
    createData(
      7,
      "Brian Jacobs",
      "Howe - Anderson",
      "Full Stack Developer",
      1,
      1
    ),
    createData(8, "Charlene Krajcik", "Schmidt LLC", "UI Designer", 1, 0),
    createData(9, "Cheryl Romaguera", "Weimann LLC", "UI Designer", 0, 1),
    createData(
      10,
      "Dr. Guadalupe Rath",
      "Spencer, Raynor and Langosh",
      "UI/UX Designer",
      1,
      0
    ),
  ];
  
  export const headCells = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "name",
    },
    {
      id: "company",
      numeric: true,
      disablePadding: false,
      label: "company",
    },
    {
      id: "role",
      numeric: true,
      disablePadding: false,
      label: "role",
    },
    {
      id: "verified",
      numeric: true,
      disablePadding: false,
      label: "verified",
    },
    {
      id: "status",
      numeric: true,
      disablePadding: false,
      label: "status",
    },
    {
      id: "",
      numeric: true,
      disablePadding: false,
      label: "",
    },
  ];
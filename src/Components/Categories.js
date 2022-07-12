import React from "react";
import classes from "./Categories.module.css";
import Category from "./Category";

const categories = [
  {
    id: 9,
    name: "General Knowledge",
    imageURL:
      "https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    id: 11,
    name: "Film",
    imageURL:
      "https://images.unsplash.com/photo-1518930259200-3e5b29f42096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjB0aGVhdHJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 14,
    name: "Television",
    imageURL:
      "https://images.unsplash.com/photo-1611427579146-5a418d32f0ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVsZXZpc2lvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 15,
    name: "Video Games",
    imageURL:
      "https://images.unsplash.com/photo-1587843618590-dd2f6ea2ccf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlkZW8lMjBnYW1lc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 18,
    name: "Computers",
    imageURL:
      "https://images.unsplash.com/photo-1586952518485-11b180e92764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 21,
    name: "Sports",
    imageURL:
      "https://images.unsplash.com/photo-1511204338744-5d4e9b3ffee0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdGJhbGx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 22,
    name: "Geography",
    imageURL:
      "https://images.unsplash.com/photo-1576767969134-4318b9bd84a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2VvZ3JhcGh5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 26,
    name: "Celebrities",
    imageURL:
      "https://images.unsplash.com/photo-1643756635111-ee5b18e055dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2VsZWJyaXR5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 27,
    name: "Animals",
    imageURL:
      "https://images.unsplash.com/photo-1604429868519-8a64cb3b010b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 28,
    name: "Vehicles",
    imageURL:
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 29,
    name: "Comics",
    imageURL:
      "https://images.unsplash.com/photo-1608889468310-1e84217c0f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvbWljfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 30,
    name: "Gadgets",
    imageURL:
      "https://images.unsplash.com/photo-1615215271299-608ada121f72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FkZ2V0c3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 31,
    name: "Anime & Manga",
    imageURL:
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 0,
    name: "Random",
    imageURL:
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 1,
    name: "Miscellaneous",
    imageURL:
      "https://images.unsplash.com/photo-1625221942340-cca5367158bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlzY2VsbGFuZW91c3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=900&q=60",
  },
];

const Categories = () => {
  return (
    <div className={classes.categoriesContainer}>
      {categories.map((category) => (
        <Category
          key={category.id}
          id={category.id}
          name={category.name}
          imageURL={category.imageURL}
        />
      ))}
    </div>
  );
};

export default Categories;

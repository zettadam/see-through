import { useQuery } from "@tanstack/react-query";

async function fetchFn() {
  const url = "http://localhost:5000/v1/catalog";
  const res = await fetch(url, { method: "GET" });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const json = await res.json();

  return json;
}

export default function getCatalogListing() {
  const options = {
    queryKey: ["catalog", "listing"],
    queryFn: fetchFn,
  };
  const result = useQuery(options);

  return result;
}

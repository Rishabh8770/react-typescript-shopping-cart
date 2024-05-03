import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import StoreItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";
import { SearchItems } from "../components/SearchItems";

export function Store() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  // Filter the items based on the search term
  const filteredItems = StoreItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SearchItems placeholder="Search items" onSearch={handleSearch} />

      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {filteredItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

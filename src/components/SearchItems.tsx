import { useState } from "react";

type SearchItemProps = {
  placeholder: string;
  onSearch:(value: string) => void
};

export function SearchItems({ placeholder, onSearch }: SearchItemProps) {
  const [search, setSearch] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <div className="me-5 my-4">
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={handleChange}
        style={{ borderRadius: "5px", width:'auto', padding:'5px'}}
      />
    </div>
  );
}

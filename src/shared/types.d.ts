export interface searchTermProp {
  searchTerm: string; // Define the type of searchTerm prop
}
export interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

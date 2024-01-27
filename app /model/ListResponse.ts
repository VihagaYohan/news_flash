type ListResponse<T> = {
  status: String;
  totalResults: number;
  articles: T;
};

export default ListResponse;

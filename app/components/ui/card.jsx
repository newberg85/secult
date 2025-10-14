
export const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-lg p-4">{children}</div>
);

export const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;

export const CardTitle = ({ children }) => <h3 className="font-bold">{children}</h3>;

export const CardContent = ({ children }) => <div>{children}</div>;

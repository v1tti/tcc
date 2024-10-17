export function Error({ error }) {
    if (!error) {
      return null;
    }
  
    return <p className="text-red-600">{error}</p>;
  }
  
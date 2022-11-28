import { useEffect, useState } from "react";

const useMember = (email) => {
  const [isMember, setIsMember] = useState(false);
  const [isMemberLoading, setIsMemberLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/users/member/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setIsMember(data.isMember);
          setIsMemberLoading(false);
        });
    }
  }, [email]);
  return [isMember, isMemberLoading];
};
export default useMember;

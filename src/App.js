import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const result = await response.json();
    if (result) {
      setLoading(false);
    }
    console.log({ result });
    setUser(result);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchUser();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="px-2 my-2">
      {loading ? (
        <div className="h-full flex items-center justify-center">
          <h1 className="text-white text-2xl">Loading...</h1>
        </div>
      ) : (
        user.results.map((user) => (
          <div key={user.id.value}>
            <section>
              <div className="h-56 w-full">
                <img
                  src={"/profileBg.png"}
                  alt="bg"
                  className="h-full w-full"
                />
              </div>
              <div className="mx-20 md:mx-10 flex gap-7">
                <div className="h-24 w-24 -translate-y-1/2 rounded-full border-4 border-white bg-red-400">
                  <img
                    src={user.picture.medium}
                    className="h-full w-full rounded-full"
                    alt="profil image"
                  />
                </div>
                <h3 className="mt-3 text-xl capitalize text-white">
                  Profile Details
                </h3>
              </div>
              <div className="mx-20 md:mx-10">
                <h1 className="text-3xl font-bold text-sky-400">
                  {`${user.name.title}. ${user.name.first} ${user.name.last}`}
                </h1>
                <p className="mb-2 mt-3 text-lg text-sky-300 opacity-70">
                  @{`${user.name.first}${user.name.last}`}
                </p>
                <hr />
              </div>
            </section>
            <section className="mx-20 md:mx-10 mt-4 flex gap-6">
              <article className="flex-1 rounded-md bg-[#3d3f54] p-4 pt-8 font-inter">
                <h3 className="text-md border-b-2 border-b-sky-300 pb-2 text-lg font-bold text-[#dcdce0]">
                  Profile Summary
                </h3>
                <div className="mt-3 text-white">
                  <div className="mb-3">
                    <p className="text-md mb-1 font-bold">Email:</p>
                    <p>{user.email}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-md mb-1 font-bold">Username:</p>
                    <p>{user.login.username}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-md mb-1 font-bold">Password:</p>
                    <p>{user.login.password}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-md mb-1 font-bold">Phone:</p>
                    <p>{user.phone}</p>
                  </div>
                </div>
              </article>
              <article className="flex-1 rounded-md bg-[#3d3f54] p-4 pt-8 font-inter">
                <h3 className="text-md border-b-2 border-b-sky-300 pb-2 text-lg font-bold text-[#dcdce0]">
                  Contact
                </h3>
                <div className="mt-3 text-white">
                  <div className="mb-3 ">
                    <p className="text-md mb-1 font-bold">Street:</p>
                    <p>
                      {`${user.location.street.number}, ${user.location.street.name}`}
                    </p>
                  </div>
                  <div className="mb-3">
                    <p className="text-md mb-1 font-bold">City:</p>
                    <p>{user.location.city}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-md mb-1 font-bold">State:</p>
                    <p>{user.location.state}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-md mb-1 font-bold">Country:</p>
                    <p>{user.location.country}</p>
                  </div>
                </div>
              </article>
            </section>
          </div>
        ))
      )}
    </main>
  );
};

export default App;

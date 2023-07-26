export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2">
      <h1 className="text-4xl">Profile</h1>
      <hr />
      <p className="text-4xl">
        Profile
        <span className="py-2 m-4 bg-orange-500 text-white rounded ">
          {params.id}
        </span>
      </p>
    </div>
  );
}

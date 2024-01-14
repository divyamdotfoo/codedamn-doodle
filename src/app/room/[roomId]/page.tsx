// Nextjs automatically passes the dynamic roomId in to the page component as prop

export default function RoomPage({ params }: { params: { roomId: string } }) {
  return <p>your room code goes here..</p>;
}

import { API_URL } from "../(home)/page";

async function getVideo(id:string) {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch(`${API_URL}/${id}/videos`)
  return response.json()
}

export default async function MovieVideo({id}: {id:string}){
  const video = await getVideo(id);
  return (
    <div>
      <h6>{JSON.stringify(video)}</h6>
    </div>
  )
}
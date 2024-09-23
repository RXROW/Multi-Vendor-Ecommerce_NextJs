import { toast } from "react-toastify";

 
type SetLoading = (loading: boolean) => void;
type ResetFunction = () => void;
type RedirectFunction = () => void;

interface RequestData {
  [key: string]: any;  
}

export async function makePostRequest(
  setLoading: SetLoading,
  endpoint: string,
  data: RequestData,
  resourceName: string,
  reset: ResetFunction,
  redirect?: RedirectFunction
): Promise<void> {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setLoading(false);
    
    if (response.ok) {
      toast.success(`New ${resourceName} Created Successfully`);
      reset();
 
    } else {
      if (response.status === 409) {
        toast.error("The Giving Warehouse Stock is NOT Enough");
      } else {
        toast.error("Something went wrong");
      }
    }
  } catch (error) {
    setLoading(false);
    console.error(error);
  }
}

export async function makePutRequest(
  setLoading: SetLoading,
  endpoint: string,
  data: RequestData,
  resourceName: string,
  redirect: RedirectFunction,
  reset: ResetFunction
): Promise<void> {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setLoading(false);
    
    if (response.ok) {
      toast.success(`${resourceName} Updated Successfully`);
      reset();
      redirect();
    } else {
      toast.error("Something Went wrong");
    }
  } catch (error) {
    setLoading(false);
    console.error(error);
  }
}

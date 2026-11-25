import ReviewsSwiper from "./ReviewsSwiper";

const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

const fetchReviews = async () => {
  try {
    const response = await fetch(
      `${apiUrl}/rest/v1/reviews?select=*`,
      {
        cache:"no-store",
        headers: {
          "apiKey": apiKey,
          "Authorization": `Bearer ${apiKey}`,
        },
      },
    );
    if (!response.ok) {
      throw new Error("خطا در دریافت اطلاعات");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
export default async function CustomerReviews() {
 const reviews=await fetchReviews()
  return (
    <ReviewsSwiper reviews={reviews}  />
  );
}

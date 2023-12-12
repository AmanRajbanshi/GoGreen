import React from "react";

const CommentBox = ({ comment, dateOfComment, email, image }) => {
  const monthName = dateOfComment
    .slice(5, 7)
    .toLocaleString("default", { month: "long" });
  console.log(dateOfComment.slice(5, 7));
  return (
    <>
      <section className="text-600 body-font">
        <div className="container mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    src={image}
                    className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font  text-gray-900 text-lg">
                    {email}
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4 dash__dash" />
                  {dateOfComment.slice(0, 4)}
                  {monthName === "01" ? " January " : null}
                  {monthName === "02" ? " Feb " : null}
                  {monthName === "03" ? " March " : null}
                  {monthName === "04" ? " April " : null}
                  {monthName === "05" ? " May " : null}
                  {monthName === "06" ? " June " : null}
                  {monthName === "07" ? " July " : null}
                  {monthName === "08" ? " August " : null}
                  {monthName === "09" ? " November " : null}
                  {monthName === "10" ? " Oct " : null}
                  {monthName === "11" ? " Sep " : null}

                  {monthName === "12" ? " Dec " : null}
                  {dateOfComment.slice(8, 10)}
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">{comment}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommentBox;

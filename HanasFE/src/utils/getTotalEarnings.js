export default (transactions) => {
  let finishedTransacs = 0;
  transactions.map((transaction) => {
    if (transaction.book_status === "Finished") {
      finishedTransacs += transaction.total_cost;
    }
  });

  return finishedTransacs;
};

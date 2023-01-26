import moment from 'moment';
import React from 'react';

const HistoryCard = ({ timeStamp }: { timeStamp: string }) => {
  const date = moment(timeStamp);
  const formattedDate = date.format('MM/DD/YYYY h:mm A');
  return (
    <div className="px-2 bg-gray-50 mb-2 hover:bg-gray-100 cursor-pointer">
      <p className="text-sm">Updated the document on</p>
      <time className="italic">{formattedDate}</time>
    </div>
  );
};

export default HistoryCard;

import React from 'react';
import { Link } from 'react-router-dom';

const JOBS = [
  { job: 'google', id: '123123' },
  { job: 'amazon', id: '0912309182903' },
  { job: 'facebook', id: 'i32dwad' },
];

export const JobsList: React.FC = () => {
  return (
    <div>
      <ul>
        {JOBS.map((job) => (
          <li key={job.id}>
             <Link to={`job-details/${job.id}`}>{job.job}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

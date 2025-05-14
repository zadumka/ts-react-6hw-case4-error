'use client';

type ErrorProps = {
  error: Error;
};

export default function ErrorComponent({ error }: ErrorProps) {
  return <p>{`Could not fetch note details. ${error.message}`}</p>;
}

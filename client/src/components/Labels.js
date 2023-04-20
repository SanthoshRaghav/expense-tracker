const labels = [
  {
    id: 1,
    type: 'Savings',
    color: '#f9c74f',
    percent: 45,
  },
  {
    id: 2,
    type: 'Investment',
    color: '#f9c74f',
    percent: 20,
  },
  {
    id: 3,
    type: 'Expense',
    color: 'rgb(54, 162, 235)',
    percent: 10,
  },
];

export const Labels = () => (
  <>
    {labels.map((item) => (
      <LabelComponent key={item.id} data={item} />
    ))}
  </>
);

const LabelComponent = ({ data }) =>
  data ? (
    <div className='labels flex justify-between'>
      <div className='flex gap-2'>
        <div className='w-2 h-2 rounded py-3' style={{ background: `${data.color}` }}></div>
        <h3 className='text-md'>{data.type ?? ''}</h3>
      </div>
      <h3 className='font-bold'>{data.percent ?? 0}%</h3>
    </div>
  ) : (
    <></>
  );

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const CustomPieChart = ({
  data,
  totalAmount,
  colors = [],
}) => {
  return (
    <div className="w-full flex flex-col items-center py-4">
      <ResponsiveContainer width={300} height={220}>
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
            labelLine={false}
          >
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={colors[idx % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [
              value,
              name.replace(/([A-Z])/g, " $1").trim(),
            ]}
            contentStyle={{
              borderRadius: "0.5rem",
              border: "1px solid #e5e7eb",
              fontFamily: "inherit",
              fontSize: 14,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 flex flex-col items-center">
        <div className="text-lg font-bold text-gray-900 mb-2">
          Total Balance: {totalAmount}
        </div>
        <div className="flex gap-4">
          {data.map((entry, idx) => (
            <div key={entry.name} className="flex items-center gap-2">
              <span
                className="inline-block w-4 h-4 rounded-full"
                style={{ backgroundColor: colors[idx % colors.length] }}
              ></span>
              <span className="text-sm text-gray-700">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomPieChart;
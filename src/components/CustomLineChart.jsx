import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const CustomLineChart = ({ data }) => (
  <div className="w-full h-64">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis 
          dataKey="date" 
          tick={{ fontSize: 12, fill: "#6b7280", fontFamily: "inherit" }} 
        />
        <YAxis 
          tick={{ fontSize: 12, fill: "#6b7280", fontFamily: "inherit" }} 
        />
        <Tooltip 
          contentStyle={{ backgroundColor: "#fff", borderRadius: "0.5rem", border: "1px solid #e5e7eb", color: "#6b7280", fontFamily: "inherit" }}
          labelStyle={{ color: "#7c3aed", fontWeight: "bold" }}
        />
        <Line 
          type="monotone" 
          dataKey="total" 
          stroke="#7c3aed" // Tailwind's purple-600
          strokeWidth={3}
          dot={{ r: 5, stroke: "#7c3aed", strokeWidth: 2, fill: "#fff" }}
          activeDot={{ r: 7, fill: "#7c3aed" }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default CustomLineChart;
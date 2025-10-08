import React from "react";
import { Edit, Trash2, Plus } from "lucide-react";

const AdminTourTable = ({ tours, onAdd, onEdit, onDelete }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Tour Packages</h3>
        <button
          onClick={onAdd}
          className="bg-[#711A79] text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} /> Add Tour
        </button>
      </div>
      <table className="w-full border-collapse bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Destination</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Duration</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour) => (
            <tr key={tour.id} className="border-t">
              <td className="p-3">{tour.name}</td>
              <td className="p-3">{tour.price}</td>
              <td className="p-3">{tour.days}</td>
              <td className="p-3 text-right space-x-2">
                <button
                  onClick={() => onEdit(tour.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => onDelete(tour.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTourTable;

<div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Core Components</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {coreComponents.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/components/${item.id}`)}
            className="cursor-pointer p-4 border rounded-lg hover:shadow-md transition"
          >
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {item.description}
            </p>

            {item.required && (
              <span className="inline-block mt-2 text-xs text-green-600 font-medium">
                Required
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
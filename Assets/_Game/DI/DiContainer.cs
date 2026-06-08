using System;
using System.Collections.Generic;
using System.Reflection;

public sealed class DiContainer
{
    private readonly Dictionary<Type, object> instances = new Dictionary<Type, object>();

    public DiContainer RegisterInstance<T>(T instance)
    {
        if (instance == null)
        {
            throw new ArgumentNullException(nameof(instance));
        }

        instances[typeof(T)] = instance;
        return this;
    }

    public T Resolve<T>()
    {
        return (T)Resolve(typeof(T));
    }

    public object Resolve(Type type)
    {
        if (type == null)
        {
            throw new ArgumentNullException(nameof(type));
        }

        if (instances.TryGetValue(type, out object exact))
        {
            return exact;
        }

        foreach (KeyValuePair<Type, object> pair in instances)
        {
            if (type.IsAssignableFrom(pair.Key))
            {
                return pair.Value;
            }
        }

        throw new InvalidOperationException("Dependency is not registered: " + type.Name);
    }

    public void Inject(object target)
    {
        if (target == null)
        {
            throw new ArgumentNullException(nameof(target));
        }

        MethodInfo[] methods = target.GetType().GetMethods(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
        foreach (MethodInfo method in methods)
        {
            if (!Attribute.IsDefined(method, typeof(InjectAttribute)))
            {
                continue;
            }

            ParameterInfo[] parameters = method.GetParameters();
            object[] arguments = new object[parameters.Length];
            for (int i = 0; i < parameters.Length; i++)
            {
                arguments[i] = Resolve(parameters[i].ParameterType);
            }

            method.Invoke(target, arguments);
        }
    }
}

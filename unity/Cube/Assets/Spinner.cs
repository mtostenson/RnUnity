using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Spinner : MonoBehaviour {

	// Update is called once per frame
	void Update () {
        transform.Rotate(Vector3.up, 90 * Time.deltaTime);
        transform.Rotate(Vector3.right, 45 * Time.deltaTime);
	}
}
